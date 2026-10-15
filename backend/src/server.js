import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import Book from './models/Book.js';
import Order from './models/Order.js';

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Get all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get books by category
app.get('/api/books/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const books = await Book.find({ category });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create order
app.post('/api/orders', async (req, res) => {
  try {
    const { bookTitle, customerName, email, phone, address } = req.body;
    
    // Validate required fields
    if (!bookTitle || !customerName || !email || !phone || !address) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const order = new Order({
      bookTitle,
      customerName,
      email,
      phone,
      address
    });
    
    const savedOrder = await order.save();
    console.log('Order saved to MongoDB:', {
      id: savedOrder._id,
      bookTitle: savedOrder.bookTitle,
      customerName: savedOrder.customerName,
      email: savedOrder.email,
      phone: savedOrder.phone,
      createdAt: savedOrder.createdAt
    });
    
    res.status(201).json({ 
      id: savedOrder._id, 
      message: 'Order created successfully and saved to MongoDB',
      order: {
        bookTitle: savedOrder.bookTitle,
        customerName: savedOrder.customerName,
        email: savedOrder.email,
        phone: savedOrder.phone
      }
    });
  } catch (error) {
    console.error('Error saving order to MongoDB:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get all orders
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
