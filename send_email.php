<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $packagetitle = $_POST['packageName'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['number'];
    $description = $_POST['message'];

    // $to = 'info@americanbookpublisherz.com';
    $to = 'bilal.hashone@hotmail.com'; 
    $subject = 'New Quote Request From Marketairre Logo';
    $message = "
        <html>
        <head>
            <title>New Quote Request From Marketairre Logo</title>
        </head>
        <body>
            <h2>New Quote Request</h2>
            <p><strong>Package:</strong> $packagetitle</p>
            <p><strong>Full Name:</strong> $name</p>
            <p><strong>Email Address:</strong> $email</p>
            <p><strong>Phone Number:</strong> $phone</p>
        </body>
        </html>
    ";

    // Set content-type header for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers

    $headers .= "From: no-reply@americanbookpublisherz.com" . "\r\n";  // Replace with your domain

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
}

?>

