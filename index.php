<?php
session_start();

// Redirect user based on session role
if (isset($_SESSION['role'])) {
    if ($_SESSION['role'] === 'student') {
        header("Location: frontend/student.html");
        exit();
    } elseif ($_SESSION['role'] === 'professor') {
        header("Location: frontend/professor.html");
        exit();
    }
}

// Default redirection to login page
header("Location: frontend/login.html");
exit();
?>
