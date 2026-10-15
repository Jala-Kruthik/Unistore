# Unistore - Complete Setup Guide

Full-stack bookstore application with React frontend and **two backend options**: Node.js/Express OR Spring Boot.

## Project Structure
```
Unistore/
├── vite-project/          # React frontend
├── backend/               # Node.js + Express backend
└── springboot-backend/    # Spring Boot backend
```

---

## Option 1: React + Node.js + MySQL

### 1. Database Setup
```sql
CREATE DATABASE unistore;
USE unistore;

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  price VARCHAR(50) NOT NULL,
  img VARCHAR(500) NOT NULL,
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_title VARCHAR(255) NOT NULL,
  customer_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample books (run schema.sql)
```

### 2. Start Node.js Backend
```bash
cd backend
npm install
npm start
```
Backend runs on: **http://localhost:3000**

### 3. Start React Frontend
```bash
cd vite-project
npm install
npm run dev
```
Frontend runs on: **http://localhost:5173**

---

## Option 2: React + Spring Boot + MySQL

### 1. Prerequisites
- Java 17 or higher
- Maven
- MySQL

### 2. Database Setup
Same as above - create `unistore` database with tables.

### 3. Configure Spring Boot
Edit `springboot-backend/src/main/resources/application.properties`:
```properties
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

### 4. Start Spring Boot Backend
```bash
cd springboot-backend
mvn clean install
mvn spring-boot:run
```
Backend runs on: **http://localhost:8080**

### 5. Update React to use Spring Boot
Edit `vite-project/src/App2.jsx` and `App3.jsx`:
- Change API URL from `http://localhost:3000` to `http://localhost:8080`

### 6. Start React Frontend
```bash
cd vite-project
npm install
npm run dev
```

---

## Current Configuration

**Frontend**: Works with hardcoded data (no backend needed)
- All 16 books are in the frontend code
- Form submission shows alert message
- Perfect for testing without database

**To switch to backend**:
1. Update `App2.jsx` to fetch from API (uncomment fetch code)
2. Update `App3.jsx` to POST to API (uncomment fetch code)
3. Start your chosen backend (Node.js or Spring Boot)

---

## API Endpoints

### Node.js (Port 3000)
- `GET /api/books` - Get all books
- `GET /api/books/category/:category` - Get books by category
- `POST /api/orders` - Create order

### Spring Boot (Port 8080)
- `GET /api/books` - Get all books
- `GET /api/books/category/:category` - Get books by category
- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders

---

## Features

✅ Browse books by category (Money, AI, Programming, Biopic)
✅ Filter books with dropdown
✅ Purchase books with customer details form
✅ Responsive design
✅ Two backend options (Node.js or Spring Boot)
✅ MySQL database integration
✅ RESTful APIs
✅ CORS enabled for local development

---

## Troubleshooting

**Frontend not showing books?**
- Currently using hardcoded data - should work immediately
- To use backend: Update fetch URLs in App2.jsx and App3.jsx

**Backend connection error?**
- Check MySQL is running
- Verify database credentials
- Ensure database `unistore` exists
- Check backend is running on correct port

**Spring Boot won't start?**
- Verify Java 17+ installed: `java -version`
- Check Maven installed: `mvn -version`
- Review application.properties for correct DB password
