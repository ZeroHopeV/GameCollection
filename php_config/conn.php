<?php

// Database-name, username, password and domain
$db = "mysql:host=10.200.1.163;dbname=gamedatabase";
$dbusername = "root";
$dbpwd = "";

try {
    // Connects to database with PDO
    $pdo = new PDO($db, $dbusername, $dbpwd);
    // Activate to handle errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Error message if the connection goes wrong
    echo "Error: " . $e->getCode() . "<br>";
    echo "Error: " . $e->getMessage();
}
