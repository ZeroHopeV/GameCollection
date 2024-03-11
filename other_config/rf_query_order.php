<?php
// Checks if there is a post-request for a specific leaderboard
if (isset($_POST["runner"])) {
    // Checks what is selected and orders the result accordingly
    if ($_POST["order"] ===  "username") {
        // Orders by username in ascending alphabetical order
        $runner_query = "SELECT run_forever.*, userinfo.username 
                            FROM run_forever INNER JOIN userinfo 
                            ON run_forever.run_forever_id = userinfo.user_id 
                            ORDER BY userinfo.username ASC;";
    } elseif ($_POST["order"] ===  "easy") {
        // Orders by easyhighscore, descending from highest to lowest
        $runner_query = "SELECT run_forever.*, userinfo.username 
                            FROM run_forever INNER JOIN userinfo 
                            ON run_forever.run_forever_id = userinfo.user_id 
                            ORDER BY run_forever.easyhighscore DESC;";
    } elseif ($_POST["order"] ===  "normal") {
        // Orders by normalhighscore, descending from highest to lowest
        $runner_query = "SELECT run_forever.*, userinfo.username 
                            FROM run_forever INNER JOIN userinfo 
                            ON run_forever.run_forever_id = userinfo.user_id 
                            ORDER BY run_forever.normalhighscore DESC;";
    } elseif ($_POST["order"] ===  "hard") {
        // Orders by hardhighscore, descending from highest to lowest
        $runner_query = "SELECT run_forever.*, userinfo.username 
                            FROM run_forever INNER JOIN userinfo 
                            ON run_forever.run_forever_id = userinfo.user_id 
                            ORDER BY run_forever.hardhighscore DESC;";
    }
}
