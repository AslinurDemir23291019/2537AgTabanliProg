<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ankara_web"; 

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Bağlantı başarısız: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $isim = $_POST['isim'];
    $email = $_POST['email'];
    $konu = $_POST['konu'];
    $mesaj = $_POST['mesaj'];

    // SQL sorgu
    $sql = "INSERT INTO iletisim (isim, email, konu, mesaj) VALUES ('$isim', '$email', '$konu', '$mesaj')";

    if ($conn->query($sql) === TRUE) {
        echo "Mesajınız başarıyla gönderildi!";
    } else {
        echo "Hata: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
