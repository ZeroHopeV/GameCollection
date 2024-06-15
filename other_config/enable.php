<?php
require_once '../php_config/session.php';

if (isset($_POST["submit"])) {
    try {
        require_once '../php_config/conn.php';

        $query = "UPDATE userinfo SET admin = 1 WHERE user_id = :id;";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(":id", $_POST["id"]);
        $stmt->execute();

        header("Location: ../admin.php");
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
} else {
    header("Location: ../index.php");
}
