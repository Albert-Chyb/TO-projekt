import express from 'express';
import z from 'zod';
import { columnsRouteGetParamsSchema } from '../models/columns-route-get-params';

const router = express.Router();

router.get('/:tableName', async (req, res) => {
	try {
		const { tableName } = columnsRouteGetParamsSchema.parse(req.params);
		const queryOptions = {
			sql: 'SHOW COLUMNS FROM ??',
			values: [tableName],
		};
		const [results] = await req.db.query(queryOptions);

		res.json(results);
	} catch (error) {
		if (error instanceof z.ZodError) {
			res.status(400).json(error.message);
		} else {
			res.status(500).json(error);
		}
	}
});

export default router;
