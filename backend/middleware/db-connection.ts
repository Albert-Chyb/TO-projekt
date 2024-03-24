import { RequestHandler } from 'express';

import mysql from 'mysql2/promise';

/**
 * This middleware creates a connection to a MySQL database and attaches it to the request object.
 * The property name is `db`.
 */

export const mySQLConnection: RequestHandler = async (req, res, next) => {
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
};
