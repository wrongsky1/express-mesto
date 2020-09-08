const express = require('express');

const app = express();
const path = require('path');
const usersRouters = require('./routes/users.js');
const cardsRouters = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouters);
app.use('/', cardsRouters);

app.all('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Ссылка на сервер ${PORT}`);
});
