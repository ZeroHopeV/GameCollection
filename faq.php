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
    <title>GameCollection - FAQ</title>
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

        <div id="locator">
            FAQ
        </div>

        <div class="link">
            <a href="help.php">Help Support</a>
        </div>

    </div>

    <div id="header">
        FAQ
    </div>

    <div class="box">
        <div class="center">
            <!-- Heading highlights the questions -->
            <div class="heading">
                Why are there users?
            </div>
            <p>Users are basically just for storing and saving progress in games.</p>

            <br>

            <div class="heading">
                What is the purpose of this website?
            </div>
            <p>It is mostly for playing games for entertainment, and potential game development and design feedback.</p>

            <br>

            <div class="heading">
                What kind of data are saved?
            </div>
            <p>Mainly username, game progress, and hashed password are the data saved from users, for privacy and legal reasons. (GDPR - Privacy)</p>
        </div>
    </div>

</div>
</body>
</html>