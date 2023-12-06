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

        <p>Game Library Collection:</p>

        <a href="run_forever.php">Run Forever - (1-Path 2D Runner)</a><br>
        <img src="images/run_forever.png" alt="game icon">

        <p>(More games and updates in development...)</p>

        Coming soon:<br>

        <p>
        Realm: Roguelike Survival - (Hack and Slash-Roguelike)<br>

        Timeless Dungeons - (Roguelike)

        Operation: Defensive Frontier - (Tower Defense)<br>

        Incremental Journey - (Incremental)<br>

        Platform Worlds - (Platformer)<br>

        ? - (RPG)<br>

        ? - (RPG)<br>

        ? - (Bullet Hell)</p>

    </div>
</div>
</body>
</html>
