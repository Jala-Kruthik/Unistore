# How to Verify Order Data in MongoDB

## Quick Steps to Verify Your Orders

### Step 1: Make Sure Everything is Running

1. **Start MongoDB** (if not running):
   ```bash
   brew services start mongodb-community
   ```

2. **Start Backend Server**:
   ```bash
   cd backend
   npm start
   ```
   You should see: `Server running on http://localhost:3000`
   And: `MongoDB connected successfully`

3. **Start Frontend** (in another terminal):
   ```bash
   cd vite-project
   npm run dev
   ```

### Step 2: Submit an Order

1. Go to your website: `http://localhost:5173`
2. Navigate to the search/books page
3. Click "Buy Now" on any book
4. Fill in the form with your details:
   - Name
   - Phone Number
   - Email
   - Address
   - Pincode
5. Click "Submit"

6. You should see a success alert confirming the order was saved!

### Step 3: Verify in MongoDB Terminal

**Open a new terminal and run:**

```bash
mongosh mongodb://localhost:27017/unistore
```

**Then run these commands:**

```javascript
// Switch to unistore database (if not already)
use unistore

// View all orders
db.orders.find().pretty()

// View the most recent order
db.orders.find().sort({ createdAt: -1 }).limit(1).pretty()

// Count total orders
db.orders.countDocuments()

// Find orders by email
db.orders.find({ email: "your-email@example.com" }).pretty()

// Find orders by customer name
db.orders.find({ customerName: "Your Name" }).pretty()
```

### Step 4: Verify via API

**Open in browser or use curl:**

```bash
# View all orders
curl http://localhost:3000/api/orders

# Or open in browser:
http://localhost:3000/api/orders
```

---

## What You Should See in MongoDB

When you run `db.orders.find().pretty()`, you should see something like:

```json
{
  "_id": ObjectId("65a1b2c3d4e5f6g7h8i9j0k1"),
  "bookTitle": "The Millionaire Fastlane",
  "customerName": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "address": "123 Main Street, 560001",
  "createdAt": ISODate("2025-01-15T10:30:00.000Z"),
  "updatedAt": ISODate("2025-01-15T10:30:00.000Z")
}
```

---

## Troubleshooting

### ❌ Orders Not Appearing in MongoDB?

1. **Check Backend Console**:
   - Look for: `Order saved to MongoDB:` message
   - If you see errors, MongoDB might not be connected

2. **Check MongoDB Connection**:
   ```bash
   # Check if MongoDB is running
   brew services list | grep mongodb
   
   # Check if you can connect
   mongosh
   ```

3. **Check Backend Logs**:
   - Make sure you see: `MongoDB connected successfully`
   - Check for any error messages when submitting the form

4. **Check Browser Console**:
   - Open Developer Tools (F12)
   - Go to Console tab
   - Look for any error messages when submitting the form

5. **Verify Database Name**:
   ```bash
   mongosh
   > show dbs
   # Should see "unistore" in the list
   > use unistore
   > show collections
   # Should see "orders" in the list
   ```

### ✅ Success Indicators

- ✅ Backend console shows: `Order saved to MongoDB:`
- ✅ Success alert appears after form submission
- ✅ `db.orders.find().pretty()` shows your order
- ✅ API endpoint `http://localhost:3000/api/orders` returns your order

---

## Quick Test Script

Run this to quickly check if orders are being saved:

```bash
# 1. Check if backend is running
curl http://localhost:3000/api/orders

# 2. Check MongoDB directly
mongosh mongodb://localhost:27017/unistore --eval "db.orders.find().pretty()"
```

---

## Example MongoDB Session

```bash
$ mongosh mongodb://localhost:27017/unistore

unistore> db.orders.find().pretty()
{
  "_id": ObjectId("65a1b2c3d4e5f6g7h8i9j0k1"),
  "bookTitle": "The Millionaire Fastlane",
  "customerName": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "address": "123 Main Street, 560001",
  "createdAt": ISODate("2025-01-15T10:30:00.000Z"),
  "updatedAt": ISODate("2025-01-15T10:30:00.000Z")
}
{
  "_id": ObjectId("65a1b2c3d4e5f6g7h8i9j0k2"),
  "bookTitle": "Think and Grow Rich",
  "customerName": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543211",
  "address": "456 Oak Avenue, 560002",
  "createdAt": ISODate("2025-01-15T11:00:00.000Z"),
  "updatedAt": ISODate("2025-01-15T11:00:00.000Z")
}

unistore> db.orders.countDocuments()
2

unistore> exit
```

---

## Real-Time Monitoring

To watch orders being added in real-time, you can:

1. **Keep MongoDB shell open** and run:
   ```javascript
   // This will show new orders as they're added
   db.orders.find().sort({ createdAt: -1 }).limit(5).pretty()
   ```

2. **Watch backend console** for the log message:
   ```
   Order saved to MongoDB: { id: ..., bookTitle: ..., ... }
   ```

---

## Need Help?

If orders still aren't showing up:
1. Check the backend terminal for error messages
2. Check browser console (F12) for JavaScript errors
3. Verify MongoDB is running: `brew services list`
4. Verify backend is running: `curl http://localhost:3000/api/books`

