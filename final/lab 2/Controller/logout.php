<?php
session_start();

// Destroy session and redirect to login
session_destroy();
Header("Location: ../View/login.php");
