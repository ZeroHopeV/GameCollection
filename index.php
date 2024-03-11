<?php
// Gets the relevant files for connection, session and link
require_once 'php_config/session.php';
require_once 'php_config/conn.php';
require_once 'php_config/link.php';

$query = "SELECT * FROM announcement;";
$stmt = $pdo->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameCollection - Main page</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="images/favicon.png">
</head>
<body>
<div id="container">
    <div id="menu">

        <div id="locator">
            Main page
        </div>

        <div class="link">
            <!--Sends the user to games.php or login.php depending on the session login data-->
            <a href=<?php echo $href; ?>>Login / Games</a>
        </div>

        <div class="link">
            <a href="leaderboards.php"> Leaderboards</a>
        </div>

        <div class="link">
            <a href="faq.php">FAQ</a>
        </div>

        <div class="link">
            <a href="help.php">Help Support</a>
        </div>

    </div>

    <div id="header">
        GameCollection - Main page
    </div>

    <div class="box">
        <div class="center">
            <div class="heading">
                Welcome...
            </div>
            <!--random introduction info text-->
            <p>This is a game collection, or like a small arcade.
                Make a user and play something.
                There are leaderboards to take a look at.
                Multiple games and updates are in development.
                You can find everything in the menu at the top.</p><br>

            <p>Instructions on how to play each game are below the game window.<br>
            For the IT-interns, here is the GitHub link: <a href="https://github.com/ZeroHopeV/GameCollection">Link to GitHub</a></p><br>


            <?php
            if (empty($result)) {
                echo "<p class='heading'>No announcements... (yet)</p>";
            } else {
                echo "<div class='heading'>Announcements:</div>";
                foreach ($result as $row) {
                    echo "<p>";
                    echo htmlspecialchars($row["datetime"])."<br>";
                    echo htmlspecialchars($row["content"])."<br>";
                    echo "</p><br>";
                }
            }
            ?>
        </div>
    </div>

</div>
</body>
</html>