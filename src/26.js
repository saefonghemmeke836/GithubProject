const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to GitHub</h1>
    <p>This is a simple GitHub project for my school.</p>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
