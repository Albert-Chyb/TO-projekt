import { Connection, createConnection } from 'mysql2/promise';
import { DbConnectionConfig } from '../models/db-connection-config';

let connection: Connection | null = null;

export async function connectToDb(config: DbConnectionConfig): Promise<void> {
	try {
		connection?.destroy();
		connection = await createConnection(config);
	} catch (error) {
		connection = null;
		throw error;
	}
}

export function getDbConnection(): Connection {
	if (connection === null) {
		throw new Error('Connection not established');
	}

	return connection;
}

export function isDbConnected(): boolean {
	return connection !== null;
}
