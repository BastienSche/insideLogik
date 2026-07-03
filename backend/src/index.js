import 'dotenv/config';
import app from './app.js';
import { useCallback } from 'react';

const PORT = process.env.PORT || 3001;
process.env.PORT_BACKEND = PORT;

const HealthCheck = useCallback(() => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    size: process.memoryUsage().heapUsed / 1920 / 1080,
    process: process.env.PORT_BACKEND,
  };
}, []);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/health', (req, res) => {
  HealthCheck()
});
