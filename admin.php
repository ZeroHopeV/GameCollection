<?php
// Gets the relevant files for connection, session and link
require_once 'php_config/session.php';
require_once 'php_config/conn.php';
require_once 'php_config/link.php';

// Checks if the user in an admin or not, sends the user to the main page if not
if ($_SESSION["admin"] !== 1) {
    header("Location: index.php");
}

$query = "SELECT * FROM userinfo WHERE NOT user_id = 1 AND NOT user_id = :id;";
$stmt = $pdo->prepare($query);
$stmt->bindParam(":id", $_SESSION["user_id"]);
$stmt->execute();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameCollection - Admin</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="images/favicon.png">
</head>
<body>
<div id="container">
    <div id="menu">

        <div class="link">
            <a href="index.php">Main page</a>
        </div>

        <div class="link">
            <!--Sends the user to games.php or login.php depending on the session login data-->
            <a href=<?php echo $href; ?>>Login / Games</a>
        </div>

        <div class="link">
            <a href="leaderboards.php">Leaderboards</a>
        </div>

        <div class="link">
            <a href="faq.php">FAQ</a>
        </div>

        <div class="link">
            <a href="help.php">Help Support</a>
        </div>

    </div>

    <div id="header">
        Admin
    </div>

    <div class="box">
        <div class="heading"><p>Create announcements</p></div>

        <form method="post" action="other_config/insert.php">
            <textarea name="content" required></textarea><br>
            <button type="submit" name="submit">Submit</button>
        </form>

        <?php
        if ($stmt->rowCount() > 0) {
        ?>
        <table>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Admin Status</th>
                <th>(Admin Button)</th>
            </tr>
            <?php
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            ?>
            <tr>
                <td><?php echo $row["user_id"]; ?></td>
                <td><?php echo $row["username"]; ?></td>
                <td><?php if ($row["admin"] === 1) {echo "Admin";} else {echo "User";} ?></td>
                <td>
                    <form method="post" action="<?php if ($row["admin"] === 1) {echo "other_config/disable.php";} else {echo "other_config/enable.php";} ?>">
                        <input type="hidden" name="id" value="<?php echo $row["user_id"];?>">
                        <button type="submit" name="submit">Change admin</button>
                    </form>
                </td>
            </tr>
            <?php
            }
            ?>
        </table>
        <?php
        } else {
            echo "<p>No other users found</p>";
        }
        ?>

    </div>

</div>
</body>
</html>