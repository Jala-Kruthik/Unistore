# Where Purchase Data is Stored

## Overview
When a customer completes a purchase, all order data is stored in **MongoDB**.

---

## Data Flow

### 1. **Frontend (React)**
- Location: `vite-project/src/App3.jsx` (InformationForm component)
- When user submits the purchase form, it sends a POST request to:
  ```
  http://localhost:3000/api/orders
  ```

### 2. **Backend (Node.js + Express)**
- Location: `backend/src/server.js`
- Receives the order data and saves it to MongoDB

### 3. **Database (MongoDB)**
- **Database Name**: `unistore`
- **Collection Name**: `orders`
- **Connection**: `mongodb://localhost:27017/unistore`

---

## Stored Data Structure

Each order document contains:

```javascript
{
  _id: ObjectId("..."),           // Auto-generated unique ID
  bookTitle: "The Millionaire Fastlane",  // Book name
  customerName: "John Doe",       // Customer's full name
  email: "john@example.com",      // Customer's email
  phone: "1234567890",            // Customer's phone number
  address: "123 Main St, 12345",  // Full address with pincode
  createdAt: ISODate("..."),      // Auto-generated timestamp
  updatedAt: ISODate("...")       // Auto-generated timestamp
}
```

---

## How to View Stored Orders

### Method 1: MongoDB Shell (Terminal)

```bash
# Connect to MongoDB
mongosh mongodb://localhost:27017/unistore

# View all orders
db.orders.find().pretty()

# View orders with specific customer
db.orders.find({ customerName: "John Doe" }).pretty()

# Count total orders
db.orders.countDocuments()

# View recent orders (sorted by date)
db.orders.find().sort({ createdAt: -1 }).pretty()
```

### Method 2: API Endpoint

```bash
# Get all orders via API
curl http://localhost:3000/api/orders

# Or visit in browser
http://localhost:3000/api/orders
```

### Method 3: MongoDB Compass (GUI)
1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Select database: `unistore`
4. Select collection: `orders`
5. View all order documents

---

## Order Model Schema

Location: `backend/src/models/Order.js`

```javascript
{
  bookTitle: String (required),
  customerName: String (required),
  email: String (required),
  phone: String (required),
  address: String (required),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

---

## Example Order Document

```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
  "bookTitle": "The Millionaire Fastlane",
  "customerName": "John Doe",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "address": "123 Main Street, Bangalore, 560001",
  "createdAt": "2025-01-15T10:30:00.000Z",
  "updatedAt": "2025-01-15T10:30:00.000Z"
}
```

---

## Quick Commands Reference

### View Orders in MongoDB
```bash
mongosh mongodb://localhost:27017/unistore
> db.orders.find().pretty()
```

### Delete All Orders (if needed)
```bash
mongosh mongodb://localhost:27017/unistore
> db.orders.deleteMany({})
```

### Find Orders by Email
```bash
mongosh mongodb://localhost:27017/unistore
> db.orders.find({ email: "john@example.com" }).pretty()
```

---

## Important Notes

✅ **Data Persistence**: All orders are permanently stored in MongoDB until manually deleted

✅ **Automatic Timestamps**: Each order automatically gets `createdAt` and `updatedAt` timestamps

✅ **Unique IDs**: Each order gets a unique `_id` (MongoDB ObjectId)

✅ **Backend Required**: Make sure the Node.js backend is running (`npm start` in `backend/` folder)

✅ **MongoDB Required**: MongoDB must be running for orders to be saved

---

## Troubleshooting

**Orders not saving?**
1. Check MongoDB is running: `brew services list | grep mongodb`
2. Check backend is running: `http://localhost:3000/api/orders`
3. Check browser console for errors
4. Verify database connection in backend logs

**Can't see orders?**
1. Verify database name: `use unistore`
2. Check collection name: `show collections` (should see `orders`)
3. Verify backend saved the order: Check backend console logs



