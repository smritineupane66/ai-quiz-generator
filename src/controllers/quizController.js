//Handles logic for creating a quiz its purpose is to recieve request
// uses model to save data and send response 
import Quiz from "../models/Quiz.js";

//Create a quiz
const createQuiz = async(req,res)=>{
    try {
          const { title, questions } = req.body;

    const quiz = new Quiz({ title, questions });
    await quiz.save();
  res.status(201).json({ success: true, quiz });
        
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

//Get all Quizzes
const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json({ success: true, quizzes });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export  {createQuiz,getQuizzes} 
