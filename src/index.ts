import express, {Request, Response} from 'express';
import { connection } from './config/db';
import { PORT } from './config/environments';


const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

connection();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});