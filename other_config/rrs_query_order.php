<?php
// Checks if there is a post-request for a specific leaderboard
if (isset($_POST["roguelike"])) {
    // Checks what is selected and orders the result accordingly
    if ($_POST["order"] ===  "username") {
        // Orders by username in ascending alphabetical order
        $runner_query = "SELECT roguelike_survival.*, userinfo.username 
                            FROM roguelike_survival INNER JOIN userinfo 
                            ON roguelike_survival.roguelike_survival_id = userinfo.user_id 
                            ORDER BY userinfo.username ASC;";
    } elseif ($_POST["order"] ===  "highscore") {
        // Orders by highscore, descending from highest to lowest
        $runner_query = "SELECT roguelike_survival.*, userinfo.username 
                            FROM roguelike_survival INNER JOIN userinfo 
                            ON roguelike_survival.roguelike_survival_id = userinfo.user_id
                            ORDER BY roguelike_survival.highscore DESC;";
    }
}
