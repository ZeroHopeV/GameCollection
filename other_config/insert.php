<?php
// Gets the relevant file for session
require_once '../php_config/session.php';

// Runs if there is a submitted post-request
if (isset($_POST["submit"])) {
    try {
        // Gets the relevant file for connection
        require_once '../php_config/conn.php';

        // Inserts the user-id and content into announcements
        $query = "INSERT INTO announcement (creator_id, content) VALUES (:creator, :content)";
        // Prepares the query for improved security
        $stmt = $pdo->prepare($query);
        // Binds the parameters
        $stmt->bindParam(":creator", $_SESSION["user_id"]);
        $stmt->bindParam(":content", $_POST["content"]);
        // Executes the query
        $stmt->execute();

        header("Location: ../index.php");
    } catch (PDOException $e) {
        // Error message if the connection goes wrong
        die("Error: " . $e->getMessage());
    }
}  else {
    // Sends the user to index.php if there is no post-request
    header("Location: ../index.php");
}