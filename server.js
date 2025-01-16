const express = require('express');
const path = require('path');
const app = express();

// Statik dosyaları sunmak için 'public' klasörünü kullanıyoruz
app.use(express.static(path.join(__dirname)));

// Anasayfa için yönlendirme
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'anasayfa.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'tarihvekultur.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'yemeicme.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'yasam.html'));
});
app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
//node server.js