# Unistore - MongoDB Setup Guide

Full-stack bookstore with React frontend and **MongoDB backends** (Node.js + Spring Boot).

## Project Structure
```
Unistore/
├── vite-project/          # React frontend
├── backend/               # Node.js + Express + MongoDB
└── springboot-backend/    # Spring Boot + MongoDB
```

---

## Prerequisites

1. **MongoDB** - Install MongoDB Community Edition
   - macOS: `brew install mongodb-community`
   - Or download from: https://www.mongodb.com/try/download/community

2. **Start MongoDB**:
   ```bash
   brew services start mongodb-community
   # OR
   mongod
   ```

---

## Option 1: React + Node.js + MongoDB

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Seed Database with Books
```bash
npm run seed
```
This creates the `unistore` database and adds 16 books.

### 3. Start Node.js Backend
```bash
npm start
```
Backend runs on: **http://localhost:3000**

### 4. Start React Frontend
```bash
cd ../vite-project
npm run dev
```
Frontend runs on: **http://localhost:5173**

---

## Option 2: React + Spring Boot + MongoDB

### 1. Prerequisites
- Java 17 or higher
- Maven
- MongoDB running

### 2. Build Spring Boot
```bash
cd springboot-backend
mvn clean install
```

### 3. Start Spring Boot Backend
```bash
mvn spring-boot:run
```
Backend runs on: **http://localhost:8080**

### 4. Seed Database
Use MongoDB Compass or mongosh to insert books:
```javascript
use unistore

db.books.insertMany([
  { title: "The Millionaire Fastlane", price: "₹364", img: "https://m.media-amazon.com/images/I/51EOf29qA0L._SY445_SX342_.jpg", category: "Money", createdAt: new Date() },
  { title: "Think and Grow Rich", price: "₹199", img: "https://m.media-amazon.com/images/I/61bfj+-wArL._SY522_.jpg", category: "Money", createdAt: new Date() },
  // ... add all 16 books
])
```

Or run the Node.js seed script (works for both backends):
```bash
cd ../backend
npm run seed
```

### 5. Start React Frontend
```bash
cd ../vite-project
npm run dev
```

---

## API Endpoints

### Node.js (Port 3000) & Spring Boot (Port 8080)
- `GET /api/books` - Get all books
- `GET /api/books/category/:category` - Get books by category
- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders

---

## Current Configuration

**Frontend**: Uses hardcoded data (no backend needed)
- Works immediately without database
- Perfect for testing

**To connect to backend**:
Currently the frontend uses hardcoded data. To fetch from MongoDB backend, the fetch code is already in place but needs to be activated.

---

## MongoDB Commands

**Check if MongoDB is running**:
```bash
mongosh
```

**View databases**:
```javascript
show dbs
```

**Use unistore database**:
```javascript
use unistore
```

**View books**:
```javascript
db.books.find()
```

**View orders**:
```javascript
db.orders.find()
```

**Clear data**:
```javascript
db.books.deleteMany({})
db.orders.deleteMany({})
```

---

## Features

✅ MongoDB instead of MySQL
✅ Node.js + Express + Mongoose
✅ Spring Boot + Spring Data MongoDB
✅ 16 books across 4 categories
✅ Order management
✅ RESTful APIs
✅ CORS enabled
✅ Automatic timestamps

---

## Troubleshooting

**MongoDB connection error?**
- Check MongoDB is running: `brew services list`
- Start MongoDB: `brew services start mongodb-community`
- Check port 27017 is available

**No books showing?**
- Run seed script: `cd backend && npm run seed`
- Check MongoDB: `mongosh` then `use unistore` then `db.books.find()`

**Backend won't start?**
- Node.js: Check `npm install` completed
- Spring Boot: Check Java 17+ installed
- Verify MongoDB is running
