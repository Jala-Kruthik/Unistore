# Quick Start Guide - Get Books Showing

Follow these steps in order:

## Step 1: Start MongoDB
Open a terminal and run:
```bash
brew services start mongodb-community
```

Wait a few seconds, then verify it's running:
```bash
brew services list | grep mongodb
```

You should see `mongodb-community` with status `started`.

## Step 2: Seed the Database
In the same terminal, navigate to the backend folder and seed the database:
```bash
cd "/Users/kruthikjala/Desktop/Coding/nodejs pro/Unistore/backend"
npm run seed
```

You should see:
```
Connected to MongoDB
Cleared existing books
Seeded 16 books successfully
```

## Step 3: Start the Backend Server
Keep the terminal open and start the backend:
```bash
npm start
```

You should see:
```
MongoDB connected successfully
Server running on http://localhost:3000
```

**Keep this terminal window open!** The server needs to keep running.

## Step 4: Verify in Browser
1. Open your browser and go to the search page
2. Open Developer Console (F12 or Cmd+Option+I)
3. Check the Console tab for any errors
4. Check the Network tab to see if the API call to `http://localhost:3000/api/books` is successful

## Troubleshooting

**If MongoDB won't start:**
- Try: `mongod` (runs in foreground)
- Check if port 27017 is already in use

**If seeding fails:**
- Make sure MongoDB is running first
- Check the error message in the terminal

**If backend won't start:**
- Make sure MongoDB is running
- Check if port 3000 is already in use
- Look for error messages in the terminal

**If books still don't show:**
- Check browser console for errors
- Verify the API call in Network tab
- Make sure backend terminal shows "Server running on http://localhost:3000"

