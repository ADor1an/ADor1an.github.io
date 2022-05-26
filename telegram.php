<?php

/* https://api.telegram.org/bot5127097269:AAHrLpvUlp5KWgNhRQYN8i8kXJb3-Kk2lzc/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$tg = $_POST['user-tg'];
$mess = $_POST['user-message'];
$token ="5127097269:AAHrLpvUlp5KWgNhRQYN8i8kXJb3-Kk2lzc";
$chat_id ="-725632275";
$arr = array(
  'Имя пользователя ' => $name,
  'Телефон:' => $phone,
  'Email: ' => $email,
  'Telegram Username: ' => $tg,
  'Message: ' => $mess

);


foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
  
  if ($sendToTelegram) {
    echo 'Good luck!';
  } else {
    echo "Error";
  }
  ?>