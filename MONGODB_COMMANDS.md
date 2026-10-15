# MongoDB Terminal Commands

## Connect to MongoDB

### Basic Connection
```bash
mongosh
```

### Connect to Specific Database
```bash
mongosh mongodb://localhost:27017/unistore
```

### Connect with Authentication (if configured)
```bash
mongosh mongodb://username:password@localhost:27017/unistore
```

---

## Common MongoDB Commands

### Database Operations
```javascript
// Show all databases
show dbs

// Use a specific database
use unistore

// Show current database
db

// Show collections in current database
show collections
```

### Book Collection Queries
```javascript
// View all books
db.books.find()

// Pretty print all books
db.books.find().pretty()

// Count books
db.books.countDocuments()

// Find books by category
db.books.find({ category: "Money" })

// Find a specific book by title
db.books.findOne({ title: "The Millionaire Fastlane" })

// Find books with price less than ₹300
db.books.find({ price: { $lt: "₹300" } })
```

### Order Collection Queries
```javascript
// View all orders
db.orders.find().pretty()

// Count orders
db.orders.countDocuments()

// Find orders by customer name
db.orders.find({ customerName: "John Doe" })

// Find recent orders (sorted by date)
db.orders.find().sort({ createdAt: -1 })
```

### Insert Data
```javascript
// Insert a single book
db.books.insertOne({
  title: "New Book",
  price: "₹299",
  img: "https://example.com/image.jpg",
  category: "Money",
  createdAt: new Date()
})

// Insert multiple books
db.books.insertMany([
  { title: "Book 1", price: "₹199", category: "Money", createdAt: new Date() },
  { title: "Book 2", price: "₹299", category: "Money", createdAt: new Date() }
])
```

### Update Data
```javascript
// Update a book's price
db.books.updateOne(
  { title: "The Millionaire Fastlane" },
  { $set: { price: "₹400" } }
)

// Update multiple documents
db.books.updateMany(
  { category: "Money" },
  { $set: { updatedAt: new Date() } }
)
```

### Delete Data
```javascript
// Delete a specific book
db.books.deleteOne({ title: "New Book" })

// Delete all books (be careful!)
db.books.deleteMany({})

// Delete all orders
db.orders.deleteMany({})
```

### Advanced Queries
```javascript
// Find books and sort by price
db.books.find().sort({ price: 1 })

// Limit results
db.books.find().limit(5)

// Skip and limit (pagination)
db.books.find().skip(0).limit(10)

// Find with projection (only return specific fields)
db.books.find({}, { title: 1, price: 1, _id: 0 })

// Aggregate - group by category
db.books.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } }
])
```

---

## Quick Reference

### Start MongoDB Service (macOS)
```bash
brew services start mongodb-community
```

### Stop MongoDB Service (macOS)
```bash
brew services stop mongodb-community
```

### Check MongoDB Status
```bash
brew services list | grep mongodb
```

### Exit MongoDB Shell
```javascript
exit
// or press Ctrl+C
```

---

## Example Session

```bash
# Connect to MongoDB
mongosh mongodb://localhost:27017/unistore

# In MongoDB shell:
> show dbs
> use unistore
> db.books.find().pretty()
> db.books.countDocuments()
> db.orders.find().pretty()
> exit
```



