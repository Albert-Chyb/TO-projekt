const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

app.use(async (req, res, next) => {
	try {
		const connection = await mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '123456',
			database: 'test',
		});

		req.db = connection;
		next();
	} catch (error) {
		next(error);
	}
});

app.get('/', async (req, res) => {
	res.send('Hello World');
});

app.listen(port, async () => {
	console.log(`Server is running on port ${port}`);
});
