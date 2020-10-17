require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>
	res.json({ status: 200, msg: 'Welcome to Gifs land!' })
);

const gifsController = require('./controllers/gifs');
app.use('/gifs', gifsController);

app.listen(PORT, console.log(`Listening at POST: ${PORT}`));
