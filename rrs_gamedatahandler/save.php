<?php
// Gets the relevant file for session
require_once '../php_config/session.php';

// Runs if there is a post-request in the server
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        // Gets the relevant file for connection
        require_once '../php_config/conn.php';

        // Selects everything from roguelike_survival with a specific user-id
        $check_query = "SELECT * FROM roguelike_survival WHERE roguelike_survival_id = :user_id;";
        // Prepares the query
        $check_stmt = $pdo->prepare($check_query);
        // Binds the parameter
        $check_stmt->bindParam(":user_id", $_SESSION["user_id"]);
        // Executes the query
        $check_stmt->execute();

        // Checks if the result of the query returns over 0 rows
        if ($check_stmt->rowCount() > 0) {
            // Updates highscore in roguelike_survival with a specific user-id
            $update_query = "UPDATE roguelike_survival SET highscore = :highscore WHERE roguelike_survival_id = :user_id;";
            // Prepares the query
            $update_stmt = $pdo->prepare($update_query);
            // Binds the parameters
            $update_stmt->bindParam(":highscore", $_POST["highscore"]);
            $update_stmt->bindParam(":user_id", $_SESSION["user_id"]);
            // Executes the query
            $update_stmt->execute();

        } else {
            // Inserts highscore into roguelike_survival with a specific user-id
            $insert_query = "INSERT INTO roguelike_survival (roguelike_survival_id, highscore) VALUES (:user_id, :highscore);";
            // Prepares the query
            $insert_stmt = $pdo->prepare($insert_query);
            // Binds the parameters
            $insert_stmt->bindParam(":user_id", $_SESSION["user_id"]);
            $insert_stmt->bindParam(":highscore", $_POST["highscore"]);
            // Executes the query
            $insert_stmt->execute();
        }

    } catch (PDOException $e) {
        // Error message if the connection goes wrong
        die("Error: " . $e->getMessage());
    }
} else {
    // Sends the user to the game if there is no post-request
    header("Location: ../realm_roguelike_survival/index.html");
}