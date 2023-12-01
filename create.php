<?php
// Gets the relevant files for connection and session
require_once 'php_config/session.php';
require_once 'php_config/conn.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameCollection - Create User</title>
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
            <a>Login / Games</a>
        </div>

        <div class="link">
            <a href="leaderboards.php">Leaderboards</a>
        </div>

    </div>

    <div id="header">
        Create user
    </div>

    <div class="box">
        <form action="userhandler/usercreate.php" method="post">
            <input type="text" name="username" placeholder="Username" required><br>

            <input type="password" name="pwd" placeholder="Password" required><br>

            <input type="password" name="confirm" placeholder="Confirm password" required><br>

            <button type="submit" name="submit">Create</button>

            <?php
            // Displays error message from session if it exists, then deletes it
            if (isset($_SESSION["error"])) {
                echo '<p>'.$_SESSION["error"].'</p>';
                unset($_SESSION["error"]);
            }
            ?>
        </form>

        <a href="login.php"><button>Login with an existing user</button></a>
    </div>

</div>
</body>
</html>