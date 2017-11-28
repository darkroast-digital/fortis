<?php
email::$services['phpmailer'] = function($email) {
    require_once(__DIR__ . DS . 'class.phpmailer.php');
    $mail = new PHPMailer;

    $mail->setFrom($email->from);
    $mail->addReplyTo($email->replyTo);
    $mail->addAddress($email->to);

    if ($email->attachment != null) {
        $mail->addAttachment($email->attachment);
    }
    $mail->isHTML(true);

    $mail->Subject = $email->subject;
    $mail->Body = $email->body;

    if (!$mail->send()) {
        throw new Error('PHPMailer error: ' . $mail->ErrorInfo);
    }
}
?>