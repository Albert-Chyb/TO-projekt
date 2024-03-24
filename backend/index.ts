import express, { Express } from 'express';
import { mySQLConnection } from './middleware/db-connection';
import tablesRoute from './routes/tables';

const app: Express = express();
const port = 3000;

app.use(mySQLConnection);
app.use('/tables', tablesRoute);

app.listen(port, async () => {
	console.log(`Server is running on port ${port}`);
});
