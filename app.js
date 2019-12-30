const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res, next) => {
  const { username } = req.body;
  return res.send(`<h1>User: ${username}</h1>`);
});

app.get('/', (req, res, next) => {
  res.send(`<form method="POST" action="/user">
    <input type="text" name="username" />
    <button type="submit">Create User</button>
  </form>`);
});

// Server up
const PORT = 5000;
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
