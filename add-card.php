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

// Get the card data from the request
$name = mysqli_real_escape_string($conn, $_POST['name']);
$image_url = mysqli_real_escape_string($conn, $_POST['image_url']);

// Insert the new card into the database
$query = "INSERT INTO cards (name, image_url) VALUES ('$name', '$image_url')";
$result = mysqli_query($conn, $query);

// Check for errors
if (!$result) {
  die('Failed to add card: ' . mysqli_error($conn));
}

// Return a success message
echo 'Card added successfully';

// Close the database connection
mysqli_close($conn);
?>
