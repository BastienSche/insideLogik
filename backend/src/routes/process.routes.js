import { Router } from 'express';
import { process } from '../controllers/process.controller.js';

const router = Router();

router.post('/process', process);

export default router;
