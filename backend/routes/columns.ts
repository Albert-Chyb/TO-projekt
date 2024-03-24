import express from 'express';

const router = express.Router();

router.get('/:tableName', async (req, res) => {
	try {
		const { tableName } = req.params;
		const queryOptions = {
			sql: 'SHOW COLUMNS FROM ??',
			values: [tableName],
		};
		const [results] = await req.db.query(queryOptions);

		res.json(results);
	} catch (error) {
		console.error(error);
		res.status(500).send('An error occurred while fetching columns');
	}
});

export default router;
