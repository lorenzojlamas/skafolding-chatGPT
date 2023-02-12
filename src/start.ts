import app from './app';
import { createConnection } from 'typeorm';

const PORT = process.env.PORT || 3000;

let connection;

(async () => {
  connection = await createConnection();
  const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

  process.on('SIGINT', async () => {
    console.log('Shutting down server');
    server.close(async () => {
      console.log('Closing database connection');
      await connection.close();
      console.log('Server closed');
      process.exit(0);
    });
  });

  process.on('SIGTERM', async () => {
    console.log('Shutting down server');
    server.close(async () => {
      console.log('Closing database connection');
      await connection.close();
      console.log('Server closed');
      process.exit(0);
    });
  });
})();
