<?php

//Database credentials
$db_host = "ls-649eefb945f8d96a2e7d739b9354002782c67afb.caln0ufxvryf.ap-southeast-2.rds.amazonaws.com";
$db_name = "cards";
$db_user = "dbmasteruser";
$db_pass = "dbpass1!";
$db_port = 3306;

//Create a database connection
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name, $db_port);

echo "Connected successfully";

//Check for errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
