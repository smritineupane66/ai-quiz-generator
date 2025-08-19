import express from 'express'
import {createQuiz,getQuizzes} from '../controllers/quizController.js'

const router = express.Router()

//Post /api/quiz : connects url to the controller logic 
router.post('/', createQuiz);
router.get("/", getQuizzes);


export default router;