<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "your-email@example.com"; // 受信したいメールアドレスに変更
    $subject = "お問い合わせフォームの送信";
    $body = "名前: $name\n会社名: $company\nメール: $email\n電話番号: $phone\nメッセージ:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "メールが送信されました。";
    } else {
        echo "メールの送信に失敗しました。";
    }
}
?>
