<?php

// Database-name, username, password and domain
$db = "mysql:host=localhost;dbname=gamedatabase";
$dbusername = "root";
$dbpwd = "";

try {
    // Connects to database with PDO
    $pdo = new PDO($db, $dbusername, $dbpwd);
    // Activate to handle errors
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Error message if the connection goes wrong
    echo "Error: " . $e->getMessage();
}

// Extra notes:
// http://localhost/im/aarsoppgave/rf_gamedatahandler/easysave.php
// http://localhost/im/aarsoppgave/rf_gamedatahandler/hardget.php
// http://localhost/im/aarsoppgave/rrs_gamedatahandler/preset.php
// http://localhost/im/aarsoppgave/rrs_gamedatahandler/save.php