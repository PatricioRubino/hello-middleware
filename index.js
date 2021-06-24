const express = require('express');
const app = express();
app.get('/hola', (req, res) => {
  console.log('Hola');
  res.end();
});
app.listen(3000);
