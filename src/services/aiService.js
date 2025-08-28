import axios from "axios";

class AIService {
  static async generateQuiz(topic) {
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/gpt2",  // Example HF model
        { inputs: `Generate 5 quiz questions about ${topic}` },
        {
          headers: {
            Authorization: `Bearer ${process.env.HF_API_KEY}`,
          },
        }
      );

      // Hugging Face returns text so parse it
      return response.data;
    } catch (error) {
      console.error("HF API error:", error.message);
      throw new Error("AI Quiz generation failed");
    }
  }
}

export default AIService;
