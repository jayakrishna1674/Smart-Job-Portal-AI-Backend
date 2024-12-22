# Project: Smart Job Portal

## Backend

### Description
The backend of the Smart Job Portal is designed to handle data management, chatbot integration, and APIs. It provides the necessary infrastructure to support features like user management, job postings, and real-time responses via an AI-powered chatbot.

### Technologies Used
- **Node.js**: Runtime environment.
- **Express.js**: Framework for building APIs.
- **MongoDB**: Database for storing user and job data.
- **OpenAI API**: For chatbot responses.
- **Mongoose**: ODM for MongoDB.

### Features Implemented
1. **User Management**: Authentication and authorization (login, signup).
2. **Job Posting Management**: Create, read, update, and delete job posts.
3. **Chatbot Integration**: An AI-powered chatbot to assist users in navigating the platform.
4. **Error Handling**: Centralized error handling for robust backend support.

### Setup Instructions
1. Clone the repository.
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   OPENAI_API_KEY=<your-openai-api-key>
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Test the APIs using Postman or any API testing tool.

---
