import express from 'express';
import { wordsRouter } from './routes/wordsRoutes.js';
import { dbConnection } from './db/connect.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/words', wordsRouter);

// Start server
const port = 9000;
(async () => {
  try {
    await dbConnection(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
})();
