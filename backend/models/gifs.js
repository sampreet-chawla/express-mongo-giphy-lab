const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const GifsSchema = new Schema(
	{
		name: { type: String, required: true },
		url: { type: String, required: true },
	},
	{ timestamps: true }
);

const Gifs = mongoose.model('Gifs', GifsSchema);

module.exports = Gifs;
