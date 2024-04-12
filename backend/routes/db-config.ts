import { Request, Router } from 'express';
import {
	DbConnectionConfig,
	connectToDb,
} from '../helpers/db-connection-singelton';

const router = Router();

router.post('/', async (req: Request<{}, {}, DbConnectionConfig>, res) => {
	try {
		await connectToDb(req.body);

		return res.send(true);
	} catch (error) {
		return res.status(500).json(error as any);
	}
});

export default router;
