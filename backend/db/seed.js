const mongoose = require('./connection');
const Gifs = require('../models/gifs');
const seedData = require('./seed.json');

const db = mongoose.connection;

Gifs.deleteMany({})
	.then(() => {
		Gifs.insertMany(seedData)
			.then((data) => console.log('Inserted Gifs: ', data))
			.catch((err) => console.log('Error Inserting data: ', err))
			.finally(() => db.close());
	})
	.catch((err) => console.log('Error deleting previous gifs'));
