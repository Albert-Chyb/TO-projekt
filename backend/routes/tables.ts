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

		res.json((<RowDataPacket[]>results).flat(1));
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
