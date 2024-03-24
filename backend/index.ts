import express, { Express } from 'express';
import { mySQLConnection } from './middleware/db-connection';

const app: Express = express();
const port = 3000;

app.use(mySQLConnection);

app.get('/', async (req, res) => {
	res.send('Hello World!');
});

app.listen(port, async () => {
	console.log(`Server is running on port ${port}`);
});
