import { Request, Router } from 'express';
import { connectToDb } from '../helpers/db-connection-singelton';
import {
	DbConnectionConfig,
	dbConnectionConfig,
} from '../models/db-connection-config';

const router = Router();

router.post('/', async (req: Request<{}, {}, DbConnectionConfig>, res) => {
	try {
		const config = dbConnectionConfig.parse(req.body);

		await connectToDb(config);

		return res.send(true);
	} catch (error) {
		return res.status(500).json(error as any);
	}
});

export default router;
