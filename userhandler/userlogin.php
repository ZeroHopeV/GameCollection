<?php
// Gets the relevant file for session
require_once '../php_config/session.php';

// Runs if there is a submitted post-request
if (isset($_POST["submit"])) {
    try {
        // Gets the relevant file for connection
        require_once '../php_config/conn.php';

        // Obtains both username and password, removes whitespace at the start and the end of the password and the username
        $username = trim($_POST["username"]);
        $pwd = trim($_POST["pwd"]);

        // Selects everything from userinfo with a specific username
        $query = "SELECT * FROM userinfo WHERE username = :username;";
        // Prepares the query for improved security
        $stmt = $pdo->prepare($query);
        // Binds the parameter
        $stmt->bindParam(":username", $username);
        // Executes the query
        $stmt->execute();

        // Checks if the result of the query returns over 0 rows
        if ($stmt->rowCount() > 0) {
            // Fetches the result as an associative array
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            // Gets the hashed password from the array
            $verify = $result["pwd"];
            // Verifies the password with the hashed password
            if (password_verify($pwd, $verify)) {
                // Resets session variables
                session_unset();
                // Stores username and user-id in session and sends the user to games.php
                $_SESSION["username"] = $result["username"];
                $_SESSION["user_id"] = $result["user_id"];
                // For admin identification
                $_SESSION["admin"] = $result["admin"];
                header("Location: ../games.php");
            } else {
                // Stores error message in session and sends the user back to login.php
                $_SESSION["error"] = "Login error, incorrect password";
                header("Location: ../login.php");
            }
        } else {
            // Stores error message in session and sends the user back to login.php
            $_SESSION["error"] = "Login error, incorrect username";
            header("Location: ../login.php");
        }
    } catch (PDOException $e) {
        // Error message if the connection goes wrong
        die("Error: " . $e->getMessage());
    }
} else {
    // Sends the user to login.php if there is no post-request
    header("Location: ../login.php");
}
