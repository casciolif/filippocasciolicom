<?php
//Connect to the database
$conn = new mysqli('ls-649eefb945f8d96a2e7d739b9354002782c67afb.caln0ufxvryf.ap-southeast-2.rds.amazonaws.com', 'dbmasteruser', 'dbpass1!', 'dbmaster');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Query to get all cards from the database
$sql = "SELECT id, name, image_url FROM cards ORDER BY name ASC";
$result = $conn->query($sql);

//Check for errors
if (!$result) {
    die("Query failed: " . $conn->error);
}

//Create an array to hold the cards
$cards = array();

//Loop through the results and add each card to the array
while ($row = $result->fetch_assoc()) {
    //Fetch the image from the URL and encode it
    $image_data = base64_encode(file_get_contents($row['image_url']));

    $cards[] = array(
        'id' => $row['id'],
        'name' => $row['name'],
        'image_data' => $image_data
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
