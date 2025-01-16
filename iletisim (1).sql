--phpmyadmin ile oluşturdum
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `iletisim` (
  `id` int(11) NOT NULL,
  `isim` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `konu` varchar(255) NOT NULL,
  `mesaj` text NOT NULL,
  `tarih` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `iletisim` (`id`, `isim`, `email`, `konu`, `mesaj`, `tarih`) VALUES
(1, 'Aslınur', 'aslinur2019@gmail.com', 'Kocatepe Camii', 'Kocatepe tarihi hakkında daha fazla bilgi alabilir miyim?', '2025-01-12 13:10:02'),
(7, 'Zehra', 'deneme@gmail.com', 'Anıtkabir ', 'Daha detaylı resimli anlatılar alabilir miyim?', '2025-01-12 16:01:46'),
(8, 'Ali', 'ali@gmail.com', 'Yemek', 'Uygun bir restoran önerisi', '2025-01-12 16:54:40'),
(9, 'Veli', 'veli@gmail.com', 'Blog', 'Ben de blog yazımı yayınlamak istiyorum.', '2025-01-12 16:55:41'),
(10, 'Ayşe', 'ayse@gmail.com', 'Çubuk Turşu', 'Çubuk Turşusunu nerden alabilirim?', '2025-01-12 16:56:48');


ALTER TABLE `iletisim`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `iletisim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

