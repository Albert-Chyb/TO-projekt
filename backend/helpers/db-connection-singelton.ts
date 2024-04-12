import {
	Connection,
	ConnectionOptions,
	createConnection,
} from 'mysql2/promise';

let connection: Connection | null = null;

export async function connectToDb(config: ConnectionOptions): Promise<void> {
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
