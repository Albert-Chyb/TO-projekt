import express, { Express } from 'express';
import { connectToDb } from './helpers/db-connection-singelton';
import { mySQLConnection } from './middleware/db-connection';
import columnsRoute from './routes/columns';
import dbConfigRoute from './routes/db-config';
import tablesRoute from './routes/tables';

const app: Express = express();
const port = 3000;

app.use(mySQLConnection);
app.use('/tables', tablesRoute);
app.use('/columns', columnsRoute);
app.use('/db-config', dbConfigRoute);

connectToDb({
	host: 'localhost',
	user: 'root',
	password: '123',
	database: 'shop',
	port: 3306,
}).then(() => {
	console.log('Connected to database');
});

app.listen(port, async () => {
	console.log(`Server is running on port ${port}`);
});
