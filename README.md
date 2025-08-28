
---

# AI Quiz Generator

**AI-powered Quiz Generator** – Backend setup with Node.js, Express, and MongoDB. *(Work in progress)*

---

## Project Status

* Project is in initial setup.
* Backend structure is ready: routes, controllers, services, models.
* AI integration and quiz generation logic will be implemented soon.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB / Mongoose
* Hugging Face API (AI text generation)
* dotenv for environment variables

---

## Installation

```bash
git clone https://github.com/your-username/ai-quiz-generator.git
cd ai-quiz-generator
npm install
```

* Setup `.env` file with placeholder keys:

```
MONGO_URI=your_mongo_uri
HF_API_KEY=your_hf_key
PORT=5000
```

* Run the server:

```bash
npm start
```

---

## Folder Structure

```
ai-quiz-generator/
├─ controllers/    # Handles request and response
├─ services/       # Contains business logic
├─ models/         # Database schemas
├─ routes/         # API route definitions
├─ config/         # Database connection & environment setup
├─ utils/          # Helper functions
├─ server.js       # Entry point of the application
└─ package.json
```

---

## Issues I Faced

While testing with Postman:

* Got response:

  ```json
  { "message": "Error generating quiz", "error": "Error generating quiz" }
  ```

* In terminal logs:

  ```
  HF API error: Not Found
  Controller Error: Error generating quiz
  ```

### Possible reasons:

* Wrong Hugging Face model endpoint
* Free model not supporting inference API
* API key valid but model unavailable

---

## What I Expect Help With

* Correct Hugging Face model endpoint (free + text generation).
* Fixing Postman request so `/quiz/generate` works.

---

## Coming Soon

* AI-powered quiz generation
* Quiz scoring system
* User authentication
* Frontend integration

---

## License

MIT License © \[Smriti Neupane]

---
