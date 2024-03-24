import { Connection } from 'mysql2/promise';

declare global {
	namespace Express {
		export interface Request {
			db: Connection;
		}
	}
}
