//Setup Server,Connect To DB and attaches routes 
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './config/db.js'
import quizRoutes from './routes/quizRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());

app.use('/quiz',quizRoutes);

//connect to MongoDB
connectDB();

//Server Start
app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port 5000');
});