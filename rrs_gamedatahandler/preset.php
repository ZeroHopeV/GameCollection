<?php
// Gets the relevant file for session
require_once '../php_config/session.php';

// Runs if there is a post-request in the server
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        // Gets the relevant file for connection
        require_once '../php_config/conn.php';

        // Selects everything from roguelike_survival with a specific user-id
        $query = "SELECT * FROM roguelike_survival WHERE roguelike_survival_id = :user_id;";
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
            // Sends highscore to the game
            echo $result['highscore'];
        }

    } catch (PDOException $e) {
        // Error message if the connection goes wrong
        die("Error: " . $e->getMessage());
    }
} else {
    // Sends the user to the game if there is no post-request
    header("Location: ../realm_roguelike_survival/index.html");
}
