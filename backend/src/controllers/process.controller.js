import { processInput } from '../services/process.service.js';

export async function process(req, res, next) {
  try {
    const { input } = req.body;

    if (typeof input !== 'string' || input.trim() === '') {
      return res.status(400).json({ error: 'input is required' });
    }

    const result = await processInput(input);
    res.json(result);
  } catch (err) {
    next(err);
  }
}
