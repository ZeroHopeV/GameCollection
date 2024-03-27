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
    <title>GameCollection - Help Support</title>
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

        <div id="locator">
            Help Support
        </div>

    </div>

    <div id="header">
        Help Support
    </div>

    <div class="box">
        <!--
        <video controls>
            <source src="#" type="video/mp4">
        </video>
        -->

        <div class="center">
            <div class="heading">The main page</div>
            <img src="images/mainpage.png" alt="main page" class="showcase">
            <p>The main page with info and announcements. Use the menu to navigate through different pages.</p>
            <br>

            <div class="heading">Login/Create user</div>
            <img src="images/login.png" alt="login page" class="showcase">
            <img src="images/create.png" alt="create page" class="showcase">
            <p>Where you can create a user and/or login. You only need a username and a password for login, the password will be hashed in the database.</p>
            <br>

            <div class="heading">Games</div>
            <img src="images/games.png" alt="games page" class="showcase">
            <p>Collection of games that are available to play. Click the game you want to play.
                The instructions for each game is under the game window.
                The highscore for each game are saved in the database connected to your user.
                There is a leaderboard at the bottom of each game page related to the game.
                You can choose to sort/order the leaderboards from what kind of stats are available for each game.
                This page can only be found and accessed after logging inn.</p>
            <br>

            <div class="heading">Leaderboards</div>
            <img src="images/leaderboards.png" alt="leaderboards page" class="showcase">
            <p>Where you can see leaderboards for every game available here.
                You can choose to sort/order the leaderboards from what kind of information are available for each game.
                Your will be highlighted if you are already logged in.</p>
            <br>

            <div class="heading">FAQ</div>
            <img src="images/faq.png" alt="faq page" class="showcase">
            <p>Frequently asked questions about this project/website with answers and additional info.
                May update with more information and questions in the future.</p>
            <br>

            <div class="heading">Help Support</div>
            <p>This is here, where you are now.
                Explanation and info about the different pages.</p>
        </div>
    </div>

</div>
</body>
</html>