<?php
  session_start();
  require_once('conn.php');
  require_once('utils.php');

  if (
    empty($_POST['username']) ||
    empty($_POST['password']) 
  ) {
    header('Location: login.php?errCode=1');
    die('資料不齊');
  }

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = sprintf(
    "SELECT * FROM chiawei26_users WHERE username='%s' and password='%s'",
    $username,
    $password
  );

  $result = $conn->query($sql);
  
  if (!$result) {
    die($conn->error);
  }

  if($result->num_rows){
    /*
    // 建立token並儲存(未使用session的寫法)
    $token = generateToken();
    $sql = sprintf(
      "insert into tokens(token,username) values('%s','%s')",
      $token,
      $username
    );
    $result = $conn->query($sql);
    if(!$result){
      die($conn->error);
    }
   
  

  //登入成功
    $expire = time() + 3600 * 24 * 30; // 30 day
    setcookie("token", $token, $expire);
     */

    $_SESSION['username'] = $username;
    header("Location: index.php");
  } else {
    header("Location: login.php?errCode=2");
  }
  
 ?>