<?php
// Database connection details
$host = 'ls-649eefb945f8d96a2e7d739b9354002782c67afb.caln0ufxvryf.ap-southeast-2.rds.amazonaws.com';
$username = 'dbmasteruser';
$password = 'dbpass1!';
$database = 'dbmaster';

// Connect to MySQL database
$conn = mysqli_connect($host, $username, $password, $database);

// Check for errors
if (mysqli_connect_errno()) {
  die('Failed to connect to MySQL: ' . mysqli_connect_error());
}

// Query the database for cards
$query = "SELECT * FROM cards";
$result = mysqli_query($conn, $query);

// Create an array to store the cards
$cards = array();

// Loop through the result set and add each card to the array
while ($row = mysqli_fetch_assoc($result)) {
  $cards[] = $row;
}

// Return the array of cards as JSON
header('Content-Type: application/json');
echo json_encode($cards);

// Close the database connection
mysqli_close($conn);
?>
