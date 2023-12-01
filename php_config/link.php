<?php
// Gets the relevant files for connection and session
require_once 'session.php';
require_once 'conn.php';

// Checks if the user-id exists in the session
if (isset($_SESSION['user_id'])) {
    // The link will send the user to games.php
    $href = "games.php";
} else {
    // The link will send the user to login.php
    $href = "login.php";
}
