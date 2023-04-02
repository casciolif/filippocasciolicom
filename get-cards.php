<?php

//Include the database connection
include('db.php');

//Query to get all cards from the database
$sql = "SELECT id, card_name FROM cards ORDER BY name ASC";
$result = $conn->query($sql);

//Check for errors
if (!$result) {
    die("Query failed: " . $conn->error);
}

//Create an array to hold the cards
$cards = array();

//Loop through the results and add each card to the array
while ($row = $result->fetch_assoc()) {
    $cards[] = array(
        'id' => $row['id'],
        'name' => $row['name']
    );
}

//Convert the array to JSON format
$json = json_encode($cards);

//Set the content type header to JSON
header('Content-Type: application/json');

//Output the JSON data
echo $json;

//Close the database connection
$conn->close();

?>
