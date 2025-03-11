const fs = require('fs');
const path = require('path');

function getRandomNodeJSCode() {
  const code = `
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  `;
  return code;
}