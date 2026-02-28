# 🎓 Euro-Tech-Scholar-Advisor-AI-Agent

An AI-powered academic advisor that helps students explore higher study opportunities in Computer Science across Europe.

## Video Demo
> https://www.dropbox.com/scl/fi/g4zyg6ng30m7s0egh499u/2026-02-28-04-33-57.mp4?rlkey=lm864tgxd3lb8c097dawwj4wj&st=0vvi2qcx&dl=0

## Live link:  
> https://euro-tech-scholar-advisor-ai-agent-h78x.onrender.com/


---

##  Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS


### Backend
- Node.js
- Express
- Gemini API (LLM integration)
- CORS configuration
- Environment variables (.env)

  
### Deployment
- Render (Both frontend and backend)

---
##  Overview

Euro-Tech-Scholar-Advisor-AI-Agent is a full-stack AI application designed to guide students who want to pursue higher education in Europe, specifically in Computer Science and related technical fields.

The system allows users to interact with an AI assistant to:

- Explore European universities
- Understand admission requirements
- Get country-specific study guidance
- Learn about tuition fees and scholarships
- Receive personalized study recommendations


---

## Local Setup Guide

###  Clone the Repository

```bash
git clone https://github.com/Parisa-Reza/Euro-Tech-Scholar-Advisor-AI-Agent.git
cd Euro-Tech-Scholar-Advisor-AI-Agent
````

---

### Backend Setup

Navigate to the server directory:

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
GEMINI_API_KEY=your_api_key_here
PORT=7866
ALLOWED_ORIGIN=http://localhost:5178
```

Start the backend:

```bash
npm run dev
```

Backend should run on:

```
http://localhost:7866
```

---

###  Frontend Setup

Open a new terminal and navigate to the client directory:

```bash
cd client
npm install
npm run dev
```

Frontend will typically run on:

```
http://localhost:5178
```

Make sure the `ALLOWED_ORIGIN` in your backend `.env` matches your frontend URL.


