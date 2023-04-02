<?php
//Connect to the database
$conn = new mysqli('ls-649eefb945f8d96a2e7d739b9354002782c67afb.caln0ufxvryf.ap-southeast-2.rds.amazonaws.com', 'dbmasteruser', 'dbpass1!', 'dbmaster');

//Check for errors
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//Get the values from the POST request
$name = $_POST['name'];
$image_url = $_POST['image_url'];

//Insert the new card into the database
$sql = "INSERT INTO cards (name, image_url) VALUES ('$name', '$image_url')";
$result = $conn->query($sql);

//Check for errors
if (!$result) {
  die("Query failed: " . $conn->error);
}

//Close the database connection
$conn->close();
?>
