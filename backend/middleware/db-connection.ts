import { RequestHandler } from 'express';
import { getDbConnection } from '../helpers/db-connection-singelton';

/**
 * This middleware attaches the database connection to the request object.
 * The property name is `db`.
 */

export const mySQLConnection: RequestHandler = async (req, res, next) => {
	try {
		req.db = getDbConnection();

		next();
	} catch (error) {
		next(error);
	}
};
