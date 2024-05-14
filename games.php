<?php
// Gets the relevant files for connection and session
require_once 'php_config/session.php';
require_once 'php_config/conn.php';

// For logging out, resets the entire session and it's data and sends the user to index.php
if (isset($_POST["submit"])) {
    session_unset();
    session_destroy();
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameCollection - Games</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="images/favicon.png">
</head>
<body>
<div id="container">
    <div id="menu">

        <div class="link">
            <a href="index.php">Main page</a>
        </div>

        <div id="locator">
            Login / Games
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
        Games
    </div>

    <div class="box">
        <!--Displays the username if it exists in the session or sends the user to login.php if it does not exist-->
        <p>Username: <?php if (isset($_SESSION['username'])) {echo htmlspecialchars($_SESSION["username"]);} else {header("Location: login.php");} ?></p>

        <form method="POST">
            <button type="submit" name="submit" id="logout">Log out</button>
        </form>

        <p>Use the following keys on the game window to get the latest update, if you do not get the updates automatically: Fn+Ctrl+F5 or Ctrl+F5 (Depending on your computer/keyboard)</p>

        <?php
        // Checks if the user is an admin
        if ($_SESSION["admin"] === 1) {
            echo "<a href='admin.php'>Admin Operations</a>";
        }
        ?>

        <div class="heading"><p>Game Library Collection:</p></div>

        <p><a href="run_forever.php">Run Forever - (1-Path 2D Runner)</a><br>
        <img src="images/run_forever.png" alt="game icon"></p>

        <p><a href="realm_roguelike_survival.php">Realm: Roguelike Survival - (Hack and Slash + Roguelite + Roguelike)</a><br>
        <img src="images/realm_roguelike_survival.png" alt="game icon"></p>

        <div class="heading"><p>(More games and updates in development...)</p></div>

        <div class="heading">Coming soon:</div><br>

        <p>
            Operation: Defensive Frontier - (Tower Defense)<br>
            <br>
            Incremental Journey - (Incremental)<br>
            <br>
            Platform Worlds - (Platformer)<br>
            <br>
            Battle Quest: Road To Mastery - (RPG)<br>
            <br>
            Fighting Mind - (Tactical RPG)<br>
            <br>
            Live In The Storm - (Bullet Hell)</p>

    </div>
</div>
</body>
</html>
