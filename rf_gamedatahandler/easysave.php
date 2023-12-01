<?php
// Gets the relevant file for session
require_once '../php_config/session.php';

// Runs if there is a post-request in the server
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        // Gets the relevant file for connection
        require_once '../php_config/conn.php';

        // Selects everything from run_forever with a specific user-id
        $check_query = "SELECT * FROM run_forever WHERE user_id = :user_id;";
        // Prepares the query
        $check_stmt = $pdo->prepare($check_query);
        // Binds the parameter
        $check_stmt->bindParam(":user_id", $_SESSION["user_id"]);
        // Executes the query
        $check_stmt->execute();

        // Checks if the result of the query returns over 0 rows
        if ($check_stmt->rowCount() > 0) {
            // Updates easyhighscore in run_forever with a specific user-id
            $update_query = "UPDATE run_forever SET easyhighscore = :easyhighscore WHERE user_id = :user_id;";
            // Prepares the query
            $update_stmt = $pdo->prepare($update_query);
            // Binds the parameters
            $update_stmt->bindParam(":easyhighscore", $_POST["easyhighscore"]);
            $update_stmt->bindParam(":user_id", $_SESSION["user_id"]);
            // Executes the query
            $update_stmt->execute();

        } else {
            // Inserts easyhighscore into run_forever with a specific user-id
            $insert_query = "INSERT INTO run_forever (user_id, easyhighscore) VALUES (:user_id, :easyhighscore);";
            // Prepares the query
            $insert_stmt = $pdo->prepare($insert_query);
            // Binds the parameters
            $insert_stmt->bindParam(":user_id", $_SESSION["user_id"]);
            $insert_stmt->bindParam(":easyhighscore", $_POST["easyhighscore"]);
            // Executes the query
            $insert_stmt->execute();
        }

    } catch (PDOException $e) {
        // Error message if the connection goes wrong
        die("Error: " . $e->getMessage());
    }
} else {
    // Sends the user to the game if there is no post-request
    header("Location: ../run_forever/index.html");
}