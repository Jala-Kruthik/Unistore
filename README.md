# Unistore - Book Store Application

Full-stack bookstore application with React frontend and Express + MySQL backend.

## Project Structure
```
Unistore/
├── vite-project/     # React frontend
└── backend/          # Express backend
```

## Setup Instructions

### 1. Database Setup

First, install MySQL if you haven't already, then create the database:

```bash
mysql -u root -p < backend/src/schema.sql
```

Or manually run the SQL commands in `backend/src/schema.sql`

### 2. Configure Database Connection

Edit `backend/src/db.js` and update your MySQL credentials:
```javascript
host: 'localhost',
user: 'root',
password: 'your_password',  // Change this!
database: 'unistore'
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

```bash
cd vite-project
npm install
```

## Running the Application

### Start Backend Server (Terminal 1)
```bash
cd backend
npm start
```
Backend runs on: http://localhost:3000

### Start Frontend Dev Server (Terminal 2)
```bash
cd vite-project
npm run dev
```
Frontend runs on: http://localhost:5173

## API Endpoints

- `GET /api/books` - Get all books
- `GET /api/books/category/:category` - Get books by category
- `POST /api/orders` - Create new order

## Features

- Browse books by category (Money, AI, Programming, Biopic)
- View book details with images and prices
- Place orders with customer information
- Data stored in MySQL database
- RESTful API backend
- Responsive React frontend
