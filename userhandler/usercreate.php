<?php
// Gets the relevant file for session
require_once '../php_config/session.php';

// Runs if there is a submitted post-request
if (isset($_POST["submit"])) {
    try {
        // Gets the relevant file for connection
        require_once '../php_config/conn.php';

        // Obtains and trims the passwords by removing whitespace at the start and at the end of the strings
        $pwd = trim($_POST["pwd"]);
        $confirm = trim($_POST["confirm"]);

        // Checks if the passwords match or not
        if ($pwd !== $confirm) {
            // Stores error message in session and sends the user back to create.php
            $_SESSION["error"] = "Passwords do not match";
            header("Location: ../create.php");
        } else {
            // Trims the username the same way as the passwords
            $username = trim($_POST["username"]);

            // Selects everything from userinfo with a specific username
            $username_query = "SELECT * FROM userinfo WHERE username = :username;";
            // Prepares the query for improved security
            $username_stmt = $pdo->prepare($username_query);
            // Binds the parameter
            $username_stmt->bindParam(":username", $username);
            // Runs the query
            $username_stmt->execute();

            // Checks if the result of the query returns over 0 rows
            if ($username_stmt->rowCount() > 0) {
                // Stores error message in session and sends the user back to create.php
                $_SESSION["error"] = "Username is already in use";
                header("Location: ../create.php");
            } else {
                // Hashes the password
                $pwd_hash = password_hash($_POST["pwd"], PASSWORD_DEFAULT);

                // Inserts username and password into userinfo
                $main_query = "INSERT INTO userinfo (username, pwd, admin) VALUES (:username, :pwd, 0);";
                // Prepares the query
                $main_stmt = $pdo->prepare($main_query);
                // Binds the parameters
                $main_stmt->bindParam(":username", $username);
                $main_stmt->bindParam(":pwd", $pwd_hash);
                // Executes the query
                $main_stmt->execute();

                // Resets session variables
                session_unset();
                // Stores username and user-id in session, the user-id is obtained by getting the last inserted id by a query
                $_SESSION["username"] = $username;
                $_SESSION["user_id"] = $pdo->lastInsertId();
                $_SESSION["admin"] = 0;
                // Sends the user to games.php
                header("Location: ../games.php");
            }
        }
    } catch (PDOException $e) {
        // Error message if the connection goes wrong
        die("Error: " . $e->getMessage());
    }
} else {
    // Sends the user to create.php if there is no post-request
    header("Location: ../create.php");
}
