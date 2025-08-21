import express from 'express'
import {createQuiz,getQuizById,getQuizzes, updateQuiz} from '../controllers/quizController.js'

const router = express.Router()

//Post /api/quiz : connects url to the controller logic

//router to create a quiz(POST request)
router.post('/create', createQuiz);

// Route to get all quizzes (GET request)
router.get("/", getQuizzes);

router.get("/:id", getQuizById);

router.put('/:id',updateQuiz)


export default router;