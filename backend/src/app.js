import express from 'express';
import cors from 'cors';
import processRoutes from './routes/process.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api', processRoutes);

app.use(errorHandler);

export default app;
