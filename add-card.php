<?php

//Include the database connection
include('db.php');

//Get the name of the card from the form data
$name = $_POST['card_name'];

//Insert the new card into the database
$sql = "INSERT INTO cards (card_name) VALUES ('$card_name')";
$result = $conn->query($sql);

//Check for errors
if (!$result) {
    die("Query failed: " . $conn->error);
}

//Close the database connection
$conn->close();

?>
