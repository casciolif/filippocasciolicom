<?php

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connect to the database
    $conn = new mysqli("ls-649eefb945f8d96a2e7d739b9354002782c67afb.caln0ufxvryf.ap-southeast-2.rds.amazonaws.com", "dbmasteruser", "dbpass1!", "dbmaster");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get the card data from the form
    $name = $_POST['name'];
    $image = $_FILES['image'];
    
    // Check if an image was uploaded
    if ($image['size'] > 0) {
        $target_dir = 'uploads/';
        $target_file = $target_dir . basename($image['name']);
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        // Allow only JPG images
        if($imageFileType != 'jpg') {
            echo 'Sorry, only JPG files are allowed.';
            exit;
        }

        // Save the image to the server
        if (!move_uploaded_file($image['tmp_name'], $target_file)) {
            echo 'Sorry, there was an error uploading your file.';
            exit;
        }

        // Insert the card into the database
        $sql = "INSERT INTO cards (name, image) VALUES ('$name', '$target_file')";
        if ($conn->query($sql) === TRUE) {
            echo 'Card added successfully!';
        } else {
            echo 'Error: ' . $sql . '<br>' . $conn->error;
        }
    } else {
        echo 'Please select an image.';
    }

    // Close the database connection
    $conn->close();
}

