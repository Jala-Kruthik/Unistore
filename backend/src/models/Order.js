import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Order', orderSchema);
