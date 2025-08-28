//Handles logic for creating a quiz its purpose is to recieve request
// uses model to save data and send response 
// import Quiz from "../models/Quiz.js";
// import AIService from "../services/aiService.js";

// //Create a quiz
// const createQuiz = async (req, res) => {
//   try {
//     const { title, questions } = req.body;  //get data from client request

//     const quiz = new Quiz({ title, questions });  //create new Quiz object
//     await quiz.save();  //save to database 
//     res.status(201).json({ message: 'Quiz created successfully', quiz });

//   } catch (error) {
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// }

// //Get all Quizzes
// const getQuizzes = async (req, res) => {
//   try {
//     const quizzes = await Quiz.find();  //fetch all quiz from DB
//     res.status(200).json({ success: true, quizzes }); //send them back to frontend
//   } catch (error) {
//     res.status(400).json({ success: false, error: error.message });
//   }
// };



// const getQuizById = async (req, res) => {
//   try {
//     const quiz = await Quiz.findById(req.params.id);

//     if (!quiz) {
//       return res.status(404).json({ message: "Quiz not found" });
//     }

//     res.status(200).json(quiz);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// const updateQuiz = async (req, res) => {
//   try {
//     const { title, questions } = req.body;
//     const quiz = await Quiz.findByIdAndUpdate(
//       req.params.id,
//       { title, questions },
//       { new: true }
//     )
//     if (!quiz) {
//       return res.status(404).json({ message: "Quiz not found" });
//     }
//     res.json({ message: "Quiz updated", quiz });

//   } catch (error) {
//     res.status(500).json({ message: "Error updating quiz", error });
//   }
// }

// export { createQuiz, getQuizzes, getQuizById , updateQuiz} 

// controllers/quizController.js
import Quiz from "../models/Quiz.js";
import AIService from "../services/aiService.js";

const generateQuiz = async (req, res) => {
  const { topic } = req.body;

  if (!topic) return res.status(400).json({ message: "Topic is required" });

  try {
    // Call AI service
    const quizText = await AIService.generateQuiz(topic);
    console.log("QuizText from AI:", quizText);

    // Save in DB
    const quiz = await Quiz.create({
      topic,
      questions: [quizText], // store as array
    });

    return res.json({
      success: true,
      message: "Quiz Generated Successfully",
      quiz,
    });

  } catch (error) {
    console.error("Controller Error:", error.message);
    return res.status(500).json({
      message: "Error generating quiz",
      error: error.message,
    });
  }
};

export default generateQuiz;
