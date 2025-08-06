import express, {Request, Response} from 'express';
import { connection } from './config/db';
import { PORT } from './config/environments';
import productRoutes from './routes/product.routes';


const app = express();
app.use(express.json());

/*
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});*/

app.use('/api/products', productRoutes);

connection();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});