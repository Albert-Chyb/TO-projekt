import { Request, Router } from 'express';
import { z } from 'zod';
import { connectToDb } from '../helpers/db-connection-singelton';
import {
	DbConnectionConfig,
	dbConnectionConfig,
} from '../models/db-connection-config';

const router = Router();

router.post(
	'/',
	async (req: Request<{}, boolean | unknown, DbConnectionConfig>, res) => {
		try {
			const config = dbConnectionConfig.parse(req.body);

			await connectToDb(config);

			return res.send(true);
		} catch (error) {
			if (error instanceof z.ZodError) {
				res.status(400).json(error.message);
			} else {
				return res.status(500).json(error);
			}
		}
	}
);

export default router;
