import axios from 'axios'
import generateQuiz from '../controllers/quizController';

class AIService {
  static async generateQuiz(topic) {
    // Example AI API call (OpenAI or any AI service)
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `Generate 5 quiz questions about ${topic}` }]
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
      }
    );

    // Return the AI-generated questions
    return response.data.choices[0].message.content;
  }
}

export default AIService;