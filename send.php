<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];


// Формирование самого письма
$title = "New message Best Tour Plan";
$body = "
<h2>New message</h2>
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br><br>
<b>Message:</b><br>$message
";
// Отправка адреса для подписки
$titleMail = "New subscriber Best Tour Plan";
$bodyMail = "
<h2>We`ve got a new subscriber!</h2>
<b>Email:</b> $email<br>
";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host       = 'smtp.ukr.net'; // SMTP сервера вашей почты
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('', 'DepOfInn'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('');

    // Отправка сообщения
    $mail->isHTML(true);
    if ($phone) {
        $mail->Subject = $title;
        $mail->Body = $body;
        $typePhone = 'message';
    } else {
        $mail->Subject = $titleMail;
        $mail->Body = $bodyMail;
        $typePhone = 'email';
    }


    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
        // Отображение результата
        header('Location: thankyou.php' . '?type=' . $typePhone);
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
