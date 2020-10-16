const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.DB_URL + process.env.DB_NAME;
//const mongoURI = 'mongodb://localhost:27017/gifs_db';
const config = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};
console.log(mongoURI);
mongoose.connect(mongoURI, config);
const db = mongoose.connection;

db.on('error', (err) => console.log(`Error connecting DB ${mongoURI} : `, err));
db.on('connected', () => console.log(`DB connected: ${mongoURI}`));
db.on('disconnected', () => console.log(`DB disconnected`));
//db.close();

module.exports = mongoose;
