const express = require('express');
const router = express.Router();

const mongoose = require('../db/connection');
const Gifs = require('../models/gifs');
const gifsSeedData = require('../db/seed.json');

router.get('/seed', async (req, res) => {
	try {
		await Gifs.deleteMany({});
		const data = await Gifs.insertMany(gifsSeedData);
		res.json({ status: 200, data: data });
	} catch (err) {
		res.json({ status: 500, error: err });
	} finally {
		//db.close();
	}
});

router.get('/', async (req, res) => {
	try {
		const data = await Gifs.find({});
		res.json({ status: 200, data: data });
	} catch (err) {
		res.json({ status: 500, error: err });
	} finally {
		//db.close();
	}
});

router.post('/', async (req, res) => {
	try {
		const data = await Gifs.create(req.body);
		res.json({ status: 200, data: data });
	} catch (err) {
		res.json({ status: 500, error: err });
	} finally {
		//db.close();
	}
});

router.put('/:gifId', async (req, res) => {
	try {
		const data = await Gifs.findByIdAndUpdate(req.params.gifId, req.body, {
			new: true,
		});
		res.json({ status: 200, data: data });
	} catch (err) {
		res.json({ status: 500, error: err });
	} finally {
		//db.close();
	}
});

router.delete('/:gifId', async (req, res) => {
	try {
		const data = await Gifs.findByIdAndDelete(req.params.gifId);
		res.json({ status: 200, data: data });
	} catch (err) {
		res.json({ status: 500, error: err });
	} finally {
		//db.close();
	}
});

module.exports = router;
