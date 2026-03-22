#  Mini Postman - API Client Web App

##  Objective

This project is a simplified version of Postman built using React and Node.js.  
It allows users to send API requests, view responses, and save requests for later use.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Axios / Fetch API

### Backend
- Node.js
- Express

### Database
- SQLite (lightweight SQL database)

---

##  Screenshot of the project
![image alt] (https://github.com/PrashantSingh7878/Mini-Postman-/blob/4f6610b2b3af1a6154e12c86f88dee98b5d03962/Screenshot%202026-03-22%20171932.png)

---
##  Features

### 1. API Request Tool
- Enter API URL
- Select HTTP method (GET, POST)
- Add request body (JSON for POST)
- Add dynamic headers (Authorization, Content-Type, etc.)
- Send request and view:
  - Status Code
  - Response Time
  - Response Body (JSON)

---

### 2. Save Requests
- Save API requests with:
  - Name
  - URL
  - Method
  - Headers
  - Body
- View all saved requests
- Delete saved request

---

### 3. Headers Support (Authentication)
- Users can add custom headers
- Example:
  - Authorization: Bearer token
- Makes app closer to real-world API clients

---

##  Screens (Optional)
- API Request Screen
- Response Viewer
- Saved Requests List

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repository
`` bash 
i) git clone <your-repo-link>
ii) cd mini-postman


2. Backend Setup
i) cd server
ii) npm install
iii) node index.js

Server runs on :
(http://localhost:5000)

3. Frontend Setup
i) cd client
ii) npm install
iii) npm run dev

Frontend runs on:
(http://localhost:5173)

## Dummy API for testing
1) For get request
https://jsonplaceholder.typicode.com/posts

2) For post request
https://jsonplaceholder.typicode.com/posts

## Json data for testing
1) {
  "title": "prashant",
  "body": "test api",
  "userId": 1
}


## Limitation of my project
1.Not fully user authentication (login/signup not implemented)
2.Limited HTTP methods (only GET, POST)
3.Basic UI (not fully styled like Postman)
4.No advanced error handling


## Future Improvements
1. User Authentication
.Sign Up / Sign In
.JWT-based authentication
.User-specific saved requests

2. Postman Collection Import
.Upload JSON file
.Parse collection
.Load multiple API requests

3. Postman Collection Import
.Upload JSON file
.Parse collection
.Load multiple API requests

4. Advanced Features
.Support for PUT, DELETE methods
.Load saved request into form
.Response headers display
.Better error handling & validation
.Request history tracking

5. Add cURL Import



