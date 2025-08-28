
# AI Quiz Generator

AI-powered backend for generating quizzes using Node.js, Express, MongoDB, and Hugging Face API.

## Tech Stack
- Node.js, Express.js
- MongoDB / Mongoose
- Hugging Face API
- dotenv

## Setup
```bash
git clone https://github.com/your-username/ai-quiz-generator.git
cd ai-quiz-generator
npm install
````

Add `.env`:

```
MONGO_URI=your_mongo_uri
HF_API_KEY=your_hf_key
PORT=5000
```

Run:

```bash
npm start
```

## Folder Structure

```
controllers/  # Request handling
services/     # Business logic
models/       # DB schemas
routes/       # API endpoints
config/       # DB connection, env setup
utils/        # Helpers
server.js     # Entry point
```

## Issues

* HF API endpoint may need correction
* Postman `/quiz/generate` might fail

## Contributing

1. Fork → Clone → Branch → Commit → Push → PR
2. Use meaningful commits


