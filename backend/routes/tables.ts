import express from 'express';
import { QueryOptions, RowDataPacket } from 'mysql2';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const queryOptions: QueryOptions = {
			rowsAsArray: true,
			sql: 'SHOW TABLES',
		};
		const [results] = await req.db.query(queryOptions);

		res.json((<RowDataPacket[]>results)[0]);
	} catch (error) {
		console.error(error);
		res.status(500).send('An error occurred while fetching tables');
	}
});

export default router;
