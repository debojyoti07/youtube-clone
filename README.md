📺 YouTube Clone - MERN Stack Capstone Project
🔥 Full-Stack Video Sharing Platform | MongoDB, Express, React, Node.js
This project is a YouTube-inspired web application built as a MERN stack capstone. It includes core video functionalities: watching, searching, filtering, commenting, and managing channels — with secure user authentication.

🚀 Tech Stack
Frontend: React, React Router DOM, Axios

Backend: Node.js, Express.js

Database: MongoDB (Local or Atlas)

Authentication: JWT (JSON Web Token)

Version Control: Git + GitHub

📁 Folder Structure
pgsql
Copy
Edit
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── index.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── context/
│   ├── App.js
│   └── index.js
✅ Features
🏠 Home Page
Video Grid Layout with thumbnails, titles, channel, views

Toggleable Sidebar with multiple categories

Search bar & filter buttons at the top

Responsive on Desktop, Tablet, and Mobile

🔐 Authentication
Register and login using email & password

JWT token stored securely in frontend

Protected routes (e.g. uploading, commenting)

User profile dropdown in the header

📹 Video Player Page
Embedded YouTube-style video playback

Channel name, views, likes, description

Comments section with ability to add/delete

📺 Channel Page
Create channel (after login)

Add/edit/delete videos

View all videos uploaded to that channel

🔍 Search & Filter
Live search for video titles

Filter by video category (Tech, Music, Coding, etc.)

🔗 API Endpoints
Route	Description
POST /api/auth/register	Register a new user
POST /api/auth/login	Login and receive JWT token
GET /api/videos/	Fetch all videos
POST /api/videos/	Upload new video (protected)
GET /api/videos/:id	Fetch video by ID
POST /api/comments/	Add comment (protected)
GET /api/comments/:videoId	Get comments for a video
POST /api/channels/	Create channel (protected)
GET /api/channels/:id	Get channel details

🧪 Sample Test Users (for Thunder Client/Postman)
json
Copy
Edit
{
  "username": "reactmaster",
  "email": "react@clone.io",
  "password": "reactrules"
}
🛠️ Local Setup Instructions
Prerequisites
Node.js (v18+ recommended)

MongoDB running locally

MongoDB Compass (for database view)

VS Code + Git

Backend Setup
bash
Copy
Edit
cd backend
npm install
touch .env
Add the following to .env:

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/youtube-clone
JWT_SECRET=yourSecretKeyHere
Then run:

bash
Copy
Edit
npm run dev
Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
