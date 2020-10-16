require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const app = express();
const PORT = process.env.POST || 3000;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) =>
	res.json({ status: 200, msg: 'Welcome to Gifs land!' })
);

const gifsController = require('./controllers/gifs');
app.use('/gifs', gifsController);

app.listen(PORT, console.log(`Listening at POST: ${PORT}`));
