# TrackEx Backend - Expense Tracker API

TrackEx is a full-stack expense tracking web application built with **Next.js, Node.js, Express.js, and MongoDB**.

This repository contains the **backend REST API** responsible for authentication, expense management, data processing, and communication with MongoDB.

## API Features

* JWT authentication
* User registration and login
* Protected API routes
* Create, update, and delete expenses
* User-specific expense ownership
* Expense search and filtering
* Expense sorting and pagination
* Monthly expense summaries
* MongoDB data persistence
* Password hashing with bcrypt

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

## Architecture

```text
Client / Next.js
       ↓
     Axios
       ↓
 Express.js API
       ↓
 JWT Middleware
       ↓
 Controllers / Services
       ↓
 Mongoose
       ↓
   MongoDB
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Samuel-joseph05/trackEx-pro-backend.git
cd trackEx-pro-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file and add the required environment variables.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the development server

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:5000
```

## Project Highlights

* RESTful API architecture
* JWT-based authentication
* Protected routes with authentication middleware
* Secure password hashing with bcrypt
* User-based expense ownership
* MongoDB pagination, filtering, and sorting
* Monthly expense aggregation

## Related Repository

**Frontend:** https://github.com/Samuel-joseph05/trackEx-pro-frontend

## Live Demo

**Frontend:** https://trackex-pro.vercel.app

## Author

**Samuel Joseph**

GitHub: https://github.com/Samuel-joseph05
