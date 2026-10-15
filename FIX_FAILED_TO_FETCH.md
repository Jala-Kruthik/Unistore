# Fix "Failed to fetch" Error

## Problem
When submitting the order form, you see: **"Error placing order: Failed to fetch"**

This means the frontend cannot connect to the backend server.

---

## Solution: Start the Backend Server

### Step 1: Open a New Terminal

Open a **new terminal window** (keep your frontend running in the other terminal).

### Step 2: Navigate to Backend Directory

```bash
cd "/Users/kruthikjala/Desktop/Coding/nodejs pro/Unistore/backend"
```

### Step 3: Start MongoDB (if not running)

```bash
brew services start mongodb-community
```

Wait for: `Successfully started 'mongodb-community'`

### Step 4: Start the Backend Server

```bash
npm start
```

**You should see:**
```
MongoDB connected successfully
Server running on http://localhost:3000
```

### Step 5: Keep It Running

**⚠️ IMPORTANT:** Keep this terminal window open! The backend server must stay running.

---

## Verify Everything is Working

### Check 1: Backend is Running
Open in browser: `http://localhost:3000/api/books`

You should see a JSON array of books (or empty array `[]`).

### Check 2: MongoDB is Connected
In the backend terminal, you should see:
```
MongoDB connected successfully
```

### Check 3: Try Submitting Order Again
1. Go back to your website
2. Click "Buy Now" on a book
3. Fill in the form
4. Click "Submit"

You should now see a success message instead of an error!

---

## Quick Start Commands

**Terminal 1 - MongoDB:**
```bash
brew services start mongodb-community
```

**Terminal 2 - Backend:**
```bash
cd "/Users/kruthikjala/Desktop/Coding/nodejs pro/Unistore/backend"
npm start
```

**Terminal 3 - Frontend (if not already running):**
```bash
cd "/Users/kruthikjala/Desktop/Coding/nodejs pro/Unistore/vite-project"
npm run dev
```

---

## Common Issues

### ❌ "Cannot find module" error in backend
**Fix:**
```bash
cd backend
npm install
npm start
```

### ❌ "MongoDB connection error" in backend
**Fix:**
```bash
# Start MongoDB
brew services start mongodb-community

# Wait a few seconds, then restart backend
npm start
```

### ❌ Backend starts but immediately crashes
**Check:**
1. Is MongoDB running? `brew services list | grep mongodb`
2. Is port 3000 already in use? Try changing PORT in `backend/src/server.js`

### ❌ Still getting "Failed to fetch"
**Check:**
1. Is backend terminal showing "Server running on http://localhost:3000"?
2. Open browser console (F12) → Network tab → Try submitting again → Check for errors
3. Try accessing `http://localhost:3000/api/books` directly in browser

---

## Testing the Connection

### Test 1: Check Backend API
```bash
curl http://localhost:3000/api/books
```

Should return JSON (even if empty array `[]`).

### Test 2: Check Orders Endpoint
```bash
curl http://localhost:3000/api/orders
```

Should return JSON array of orders.

### Test 3: Submit Test Order
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "bookTitle": "Test Book",
    "customerName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "address": "123 Test St, 12345"
  }'
```

Should return: `{"id":"...","message":"Order created successfully..."}`

---

## After Fixing

Once the backend is running:
1. ✅ You'll see "MongoDB connected successfully" in backend terminal
2. ✅ You'll see "Server running on http://localhost:3000" in backend terminal
3. ✅ Submitting the form will show a success message
4. ✅ Orders will be saved to MongoDB

**To verify in MongoDB:**
```bash
mongosh mongodb://localhost:27017/unistore
db.orders.find().pretty()
```

---

## Summary

**The issue:** Backend server is not running.

**The fix:** Start the backend server in a separate terminal:
```bash
cd backend
npm start
```

**Keep it running** while you use the website!

