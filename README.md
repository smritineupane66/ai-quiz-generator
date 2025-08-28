
# AI Quiz Generator

**AI-powered Quiz Generator** – Backend setup with Node.js, Express, and MongoDB.

---

## Project Status

* Backend structure ready: routes, controllers, services, models.
* AI integration and quiz generation logic in progress.

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
````

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
├─ controllers/    # Handles requests & responses
├─ services/       # Contains business logic
├─ models/         # Database schemas
├─ routes/         # API route definitions
├─ config/         # DB connection & env setup
├─ utils/          # Helper functions
├─ server.js       # Entry point
└─ package.json
```

---

## Contributing

* Fork this repository.
* Create a new branch for your changes:

  ```bash
  git checkout -b fix/your-issue-name
  ```
* Make your changes & commit with a meaningful message:

  ```bash
  git add .
  git commit -m "fix: description of the fix"
  ```
* Push your branch to your forked repo:

  ```bash
  git push origin fix/your-issue-name
  ```
* Open a Pull Request to this repository.
* Describe the issue you are fixing or the feature you are adding.

---

## Coming Soon

* AI-powered quiz generation
* Quiz scoring system
* User authentication
* Frontend integration

---

## License

MIT License © \[Smriti Neupane]



