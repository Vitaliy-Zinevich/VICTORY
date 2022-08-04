<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";

    $mail = new PHPMailer(true);
	
    $mail->CharSet = "UTF-8";
    $mail->IsHTML(true);

    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $mail = $_POST["mail"];
    $messages = $_POST["messages"];
	$email_template = "template_mail.html";

    $body = file_get_contents($email_template);
	$body = str_replace('%firstName%', $name, $body);
    $body = str_replace('%lastName%', $name, $body);
	$body = str_replace('%mail%', $email, $body);
	$body = str_replace('%messages%', $message, $body);

    $mail->addAddress("everwoods21011993@gmail.com");   // Здесь адрес Email, куда отправлять
	$mail->setFrom($email);
    $mail->Subject = "[Письмо с сайта]";
    $mail->MsgHTML($body);

    if (!$mail->send()) {
        $message = "Ошибка отправки";
    } else {
        $message = "Данные отправлены!";
    }
	
	$response = ["message" => $message];

    header('Content-type: application/json');
    echo json_encode($response);


?>