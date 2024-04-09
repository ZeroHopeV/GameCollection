<?php

// Improve security around session and it's information
ini_set('session.use_only_cookies', 1);
ini_set('session.use_strict_mode', 1);

// Settings for session and it's security
session_set_cookie_params([
    // Session lasts for 4 hours
    'lifetime' => 14400,
    // Secure communication between the domain-website and the server
    'domain' => '10.200.1.163',
    // Secures every webpage
    'path' => '/',
    // Secures the use of session in a secure connection with https, but since the server uses http, it is set to false
    'secure' => false,
    // Use http protocol to avoid JavaScript-manipulation
    'httponly' => true
]);

// Starts the session
session_start();

// Generates a new session id and deletes the old id
session_regenerate_id(true);

// Checks if the time for session id exists
if (!isset($_SESSION['last_regen'])) {
    session_regenerate_id(true);
    // The current time is saved in the session
    $_SESSION['last_regen'] = time();
} else {
    // Creates an interval of 4 hours
    $interval = 60 * 240;
    // Checks if it has been over the time of the interval, creates a new id if the condition is met
    if (time() - $_SESSION['last_regen'] >= $interval) {
        session_regenerate_id(true);
        $_SESSION['last_regen'] = time();
    }
}
