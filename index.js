require('dotenv').config();

const server = require('./server');

async function start() {
  const PORT = process.env.PORT || 8080;

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  process.on('SIGINT', () => {
    console.warn('[SIGINT]: Shutting down smart-rent-backend', new Date().toISOString());
    shutdown();
  });

  process.on('SIGTERM', () => {
    console.warn('[SIGTERM]: Shutting down smart-rent-backend', new Date().toISOString());
    shutdown();
  });

  const shutdown = () => {
    proces.exit();
  }
}

start();