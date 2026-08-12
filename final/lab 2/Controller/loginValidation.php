<?php
session_start();

$username = $_POST["username"] ?? "";
$password = $_POST["password"] ?? "";

$hasError = false;

// Check username
if ($username == "") {
    $_SESSION["usernameError"] = "Username is required";
    $hasError = true;
} 

// Check password
if ($password == "") {
    $_SESSION["passwordError"] = "Password is required";
    $hasError = true;
}

// If no empty fields, check credentials
if (!$hasError) {
    // Simple hardcoded check (you can change these values)
    if ($username == "admin" && $password == "1234") {
        $_SESSION["isLoggedIn"] = true;
        $_SESSION["loggedInUser"] = $username;
        Header("Location: ../View/dashboard.php");
    } else {
        $_SESSION["usernameError"] = "Invalid username or password";
        $_SESSION["username"] = $username;
        Header("Location: ../View/login.php");
    }
} else {
    $_SESSION["username"] = $username;
    Header("Location: ../View/login.php");
}
