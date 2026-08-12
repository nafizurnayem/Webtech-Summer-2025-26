<?php
session_start();

// If not logged in, redirect back to login page
$isLoggedIn = $_SESSION["isLoggedIn"] ?? false;
if (!$isLoggedIn) {
    Header("Location: login.php");
}

$loggedInUser = $_SESSION["loggedInUser"] ?? "User";

// Check if the cookie "favorite_food" is already set
$favoriteFoodCookie = $_COOKIE["favorite_food"] ?? "";

// If the form is submitted, save the food name in a cookie for 30 days
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $foodName = $_POST["food_name"] ?? "";
    if ($foodName != "") {
        // time() + 30 days in seconds = 30 * 24 * 60 * 60
        setcookie("favorite_food", $foodName, strtotime("+30 days"));
        $favoriteFoodCookie = $foodName;
    }
}

?>

<html>

<body>
    <h1 align="center">Welcome to Food Bank!!!</h1>

    <p align="center">Hello, <strong><?php echo $loggedInUser; ?></strong>! You are logged in.</p>

    <?php if ($favoriteFoodCookie != "") { ?>

        <!-- Cookie is already set, show welcome message -->
        <p align="center">Hi, We know about your favorite food: <strong><?php echo $favoriteFoodCookie; ?></strong></p>

    <?php } else { ?>

        <!-- Cookie is not set, show the form -->
        <form action="dashboard.php" method="post">
            <fieldset>
                <legend>Tell Us Your Favorite Food</legend>
                <table>
                    <tr>
                        <td>Please let us know about your favorite food:</td>
                        <td><input type="text" name="food_name" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Save" /></td>
                    </tr>
                </table>
            </fieldset>
        </form>

    <?php } ?>

    <p align="center">
        <a href="../Controller/logout.php">Logout</a>
    </p>
</body>

</html>