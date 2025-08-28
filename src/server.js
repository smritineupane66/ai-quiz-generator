//Setup Server,Connect To DB and attaches routes 
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import quizRoutes from './routes/quizRoutes.js'

dotenv.config();

//connect to MongoDB
connectDB();

console.log("HF API Key:", process.env.HF_API_KEY);

const app = express();
app.use(express.json());

app.use('/quiz',quizRoutes);

app.use((req, res) => res.status(404).json({ message: "Not Found" }));

//Server Start
app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port 5000');
});