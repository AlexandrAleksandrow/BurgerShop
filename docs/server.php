<?php

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $street = $_POST['street'];
  $house = $_POST['house'];
  $housing = $_POST['housing'];
  $apartment = $_POST['apartment'];
  $floor = $_POST['floor'];
  $comment = $_POST['comment'];
  $change = $_POST['need-change'];
  $pay = $_POST['pay-card'];

  $callback = $_POST['callback']; // 1 или null
  $callback = isset($callback) ? 'НЕТ' : 'ДА';

  $mail_message = '
  <html>
  <head>
    <title>Заявка</title>
  </head>
  <body>
    <h2>Заказ</h2>
      <ul>
        <li>Имя:' . $name . '</li>
        <li>Телефон: ' . $phone . '</li>
        <li>Улица: ' . $street . '</li>
        <li>Дом: ' . $house . '</li>
        <li>Корпус: ' . $housing . '</li>
        <li>Квартира: ' . $apartment . '</li>
        <li>Этаж: ' . $floor . '</li>
        <li>Комментарий к заказу: ' . $comment . '</li>
        <li>Понадобится сдача: ' . $change . '</li> 
        <li>Способ оплаты: ' . $pay . '</li>           
        <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
      </ul>
  </body>
  </html>';

  $headers = "From: Автор учебного проекта <limasowalexandr@gmail.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

  $mail = mail('donproject1@yandex.ru', 'Заказ', $mail_message, $headers);

 if ($mail) {
    echo('done');
  }else{
    echo('error');
  }
  
?>