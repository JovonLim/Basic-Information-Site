const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + '/contact-me.html');
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/404.html');
});


const port = 8080;
app.listen(port, () => console.log(`Example app listening on port ${port}`));