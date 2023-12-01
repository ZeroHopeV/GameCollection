<?php
// Gets the relevant file for session
require_once '../php_config/session.php';

// Runs if there is a post-request in the server
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        // Gets the relevant file for connection
        require_once '../php_config/conn.php';

        // Selects everything from run_forever with a specific user-id
        $query = "SELECT * FROM run_forever WHERE user_id = :user_id;";
        // Prepares the query
        $stmt = $pdo->prepare($query);
        // Binds the parameter
        $stmt->bindParam(":user_id", $_SESSION["user_id"]);
        // Executes the query
        $stmt->execute();

        // Checks if the result of the query returns over 0 rows
        if ($stmt->rowCount() > 0) {
            // Fetches the result as an associative array
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            // Checks if hardhighscore exists in the array
            if (isset($result['hardhighscore'])) {
                // Sends hardhighscore to the game
                echo $result['hardhighscore'];
            }
        }

    } catch (PDOException $e) {
        // Error message if the connection goes wrong
        die("Error: " . $e->getMessage());
    }
} else {
    // Sends the user to the game if there is no post-request
    header("Location: ../run_forever/index.html");
}