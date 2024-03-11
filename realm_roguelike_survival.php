<?php
// Gets the relevant files for connection, session and link
require_once 'php_config/session.php';
require_once 'php_config/conn.php';
require_once 'php_config/link.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameCollection - Realm: Roguelike Survival</title>
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
        Realm: Roguelike Survival - <br>(Hack and Slash + Roguelite + Roguelike)
    </div>

    <div class="box">
        <!--Displays the username if it exists in the session or sends the user to login.php if it does not exist-->
        <p>Username: <?php if (isset($_SESSION['username'])) {echo htmlspecialchars($_SESSION["username"]);} else {header("Location: login.php");} ?></p><br>

        <!-- The iframe for the game -->
        <iframe id="roguelike" src="realm_roguelike_survival/index.html"></iframe>

        <div class="heading">Instructions:</div><br>
        <p>WASD or arrow keys to move around<br>
            Use mouse to choose upgrades</p>

        <img src="images/realm_roguelike_survival.png" alt="gameicon">

        <p>Leaderboards: (Reload the page to update)</p><br>
        <form method="post" action="">
            Order by:
            <select name="order">
                <option value="deafault">Deafault</option>
                <option value="username">Username</option>
                <option value="highscore">Highscore</option>
            </select>
            <input type="submit" name="roguelike" value="Reload">
        </form>

        <?php
        // Selects everything from roguelike_survival, including username from userinfo
        // Connects with inner join by comparing user-id in both run_forever and userinfo to see which user-id exists in both tables/in userinfo also exists in run_forever
        $runner_query = "SELECT roguelike_survival.*, userinfo.username 
                            FROM roguelike_survival INNER JOIN userinfo 
                            ON roguelike_survival.roguelike_survival_id = userinfo.user_id;";

        // Gets the relevant file for ordering the leaderboard
        require_once 'other_config/rrs_query_order.php';

        // Preapres the query for improved security
        $runner_stmt = $pdo->prepare($runner_query);
        // Executes the query
        $runner_stmt->execute();
        // Checks if the result of the query returns over 0 rows
        if ($runner_stmt->rowCount() > 0) {
            ?>
            <table>
                <tr>
                    <th>Username</th>
                    <th>Highscore</th>
                </tr>
                <!-- Runs for every query by getting every row as an associative array -->
                <?php while ($row = $runner_stmt->fetch(PDO::FETCH_ASSOC)) { ?>
                    <tr <?php if ($_SESSION["username"] === htmlspecialchars($row['username'])) {echo 'style="color: #00ffff"';} ?>>
                        <!-- Display username and highscore for each difficulty for each row in a table -->
                        <td><?php echo htmlspecialchars($row['username']); ?></td>
                        <td><?php echo htmlspecialchars($row['highscore']); ?></td>
                    </tr>
                <?php } ?>
            </table>
        <?php } else {
            // Displays the message if there are no rows returned
            echo "Nothing found";
        }
        ?>

    </div>

</div>
</body>
</html>
