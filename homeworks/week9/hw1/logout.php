<?php
/*
未使用session的寫法
  require_once('conn.php');
  //刪除token

  $token = $_COOKIE['token'];
  $sql = sprintf(
    "delete from tokens where token='%s'",
    $token
  );
  $conn->query($sql);
  setcookie("token", "", time() - 3600);
   */
  session_start();
  session_destroy();
  header("Location: index.php");
 ?>