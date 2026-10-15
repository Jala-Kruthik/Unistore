import React, { useState } from "react";

function InformationForm({ bookName, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting order to:', '/api/orders');
      console.log('Order data:', {
        bookTitle: bookName,
        customerName: form.name,
        email: form.email,
        phone: form.phone,
        address: `${form.address}, ${form.pincode}`
      });

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bookTitle: bookName,
          customerName: form.name,
          email: form.email,
          phone: form.phone,
          address: `${form.address}, ${form.pincode}`
        })
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Order saved successfully:', data);
      
      alert(`Thank you for your order!\n\n✅ Order successfully saved to MongoDB!\n\nOrder Details:\n- Book: ${data.order?.bookTitle || bookName}\n- Name: ${data.order?.customerName || form.name}\n- Email: ${data.order?.email || form.email}\n- Phone: ${data.order?.phone || form.phone}\n- Order ID: ${data.id}\n\nYour order has been recorded!`);
      
      // Reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        pincode: ""
      });
      onClose();
    } catch (error) {
      console.error('Error submitting order:', error);
      
      let errorMessage = 'Error placing order: ';
      
      if (error.message === 'Failed to fetch' || error.name === 'TypeError') {
        errorMessage += `\n\n❌ Cannot connect to backend server!\n\nPlease make sure:\n1. Backend server is running: cd backend && npm start\n2. Server is running on http://localhost:3000\n3. MongoDB is running: brew services start mongodb-community\n\nCheck the browser console (F12) for more details.`;
      } else {
        errorMessage += error.message;
      }
      
      alert(errorMessage);
    }
  };

  return (
    <div className="container" style={{ position: "relative" }}>
      <style>{`
        .container {
          background: #fff;
          color: #333;
          max-width: 400px;
          margin: 60px auto;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(44,62,80,0.25);
          padding: 36px 26px 28px 26px;
          position: relative;
        }
        .back-btn {
          position: absolute;
          top: 18px;
          left: 18px;
          padding: 8px 22px;
          background: #240592;
          color: #fff;
          border: none;
          border-radius: 22px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }
        .back-btn:hover {
          background: #4626c3;
        }
        h2 {
          text-align: center;
          margin-bottom: 14px;
          color: #240592;
        }
        .selected-book {
          text-align: center;
          margin-bottom: 22px;
          font-size: 1.08rem;
          color: #4626c3;
          font-weight: bold;
        }
        form label {
          display: block;
          margin-bottom: 7px;
          margin-top: 18px;
          font-weight: 500;
          color: #240592;
        }
        form input, form textarea {
          width: 100%;
          padding: 10px 8px;
          border: 1px solid #b5a5e5;
          border-radius: 6px;
          font-size: 1rem;
          margin-bottom: 8px;
          background: #f4f4fd;
          font-family: inherit;
          resize: vertical;
          color: #333;
          box-sizing: border-box;
        }
        form input:focus, form textarea:focus {
          outline: none;
          border-color: #4626c3;
          background: #eef2ff;
        }
        .submit-btn {
          width: 100%;
          background: #240592;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: bold;
          letter-spacing: 1px;
          cursor: pointer;
          margin-top: 18px;
          transition: background 0.2s;
        }
        .submit-btn:hover {
          background: #4626c3;
        }
        .selected-book-bottom {
          text-align: center;
          margin-top: 20px;
          padding: 12px;
          background: #f4f4fd;
          border-radius: 8px;
          font-size: 1rem;
          color: #240592;
          font-weight: bold;
          border: 2px solid #b5a5e5;
        }
        @media (max-width: 500px) {
          .container {
            margin: 20px 4px;
            padding: 15px 4px 18px 4px;
          }
        }
      `}</style>
      <button className="back-btn" type="button" onClick={onClose}>Back</button>
      <h2>Complete Your Purchase</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{10,15}"
          maxLength="15"
          placeholder="Enter phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          name="address"
          placeholder="Enter your address"
          rows="3"
          value={form.address}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="pincode">Pincode</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          placeholder="Enter pincode"
          value={form.pincode}
          onChange={handleChange}
          required
          pattern="[0-9]{5,8}"
          maxLength="8"
        />

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      
      <div className="selected-book-bottom">
        Selected Book: {bookName}
      </div>
    </div>
  );
}

export default InformationForm;
