const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const path = require('path'); // el

const usersRouters = require('./routes/users.js');
const cardsRouters = require('./routes/cards.js');

const { PORT = 5000 } = process.env;

const app = express();
// app.use(express.static(path.join(__dirname, 'public'))); // el

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*
app.use((req, res, next) => {
  req.user = {
    id: '5d8b8592978f8bd833ca8133', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});
/*
{
    "name": "тестовый пользователь",
    "about": "информация о себе",
    "avatar": "https://memepedia.ru/wp-content/uploads/2020/06/elli-mem-the-last-of-us-2.jpg"
}
*/
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/', usersRouters);
app.use('/', cardsRouters);

app.all('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Ссылка на сервер ${PORT}`);
});
