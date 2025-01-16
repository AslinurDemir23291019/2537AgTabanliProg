<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ankara_web";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Bağlantı hatası: " . $conn->connect_error);
}

$sql = "SELECT * FROM iletisim";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ankara'yı Keşfet</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Ankara'nın Güzellikleri</h1>
    <ul>
        <?php
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<li><h2>" . $row["isim"] . "</h2><p>" . $row["konu"] ."</h2><p>" . $row["mesaj"] ."</p></li>";
            }
        } else {
            echo "<p>Hiçbir kayıt bulunamadı.</p>";
        }
        ?>
    </ul>
</body>
</html>
