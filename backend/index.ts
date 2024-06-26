import express, { Express } from 'express';
import { mySQLConnection } from './middleware/db-connection';
import columnsRoute from './routes/columns';
import dbConfigRoute from './routes/db-config';
import tablesRoute from './routes/tables';

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use('/db-config', dbConfigRoute);
app.use(mySQLConnection);
app.use('/tables', tablesRoute);
app.use('/columns', columnsRoute);

app.listen(port, async () => {
	console.log(`Server is running on port ${port}`);
});
