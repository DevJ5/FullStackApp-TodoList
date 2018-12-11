const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;

const todos = require('./routes/api/todos')

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  
app.use('/api/todos', todos)

app.listen(port, () => console.log(`Server listening on port ${port}`));
