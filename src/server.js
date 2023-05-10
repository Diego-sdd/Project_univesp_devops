const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! V2');
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
