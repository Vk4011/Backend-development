const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const UserModel = require('./models/User');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('\n\t Connected to MongoDB\n');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get('/login', (req, res) => res.send('login data'));
app.get('/', (req, res) => res.send('server is started'));

app.post('/register', (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({ status: 'Success' });
        } else {
          res.json({ status: 'Error', message: 'The password is incorrect' });
        }
      } else {
        res.json({ status: 'Error', message: 'No record existed' });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

const port = 4080;
app.listen(port, () => console.log(`\n\t server is running: ${port}`));
