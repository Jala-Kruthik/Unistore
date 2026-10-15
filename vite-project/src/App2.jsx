import React, { useState, useEffect } from "react";
import InformationForm from "./App3";

// Category options
const categories = ["All", "Money", "AI", "Programming", "Biopic"];

// Fallback books data (used if API fails)
const fallbackBooks = [
  // Money Category
  { title: "The Millionaire Fastlane", price: "₹364", img: "https://m.media-amazon.com/images/I/51EOf29qA0L._SY445_SX342_.jpg", category: "Money" },
  { title: "The Art of Spending Money", price: "₹365", img: "https://m.media-amazon.com/images/I/71yeCbQhVrL._AC_UY436_FMwebp_QL65_.jpg", category: "Money" },
  { title: "Think and Grow Rich", price: "₹199", img: "https://m.media-amazon.com/images/I/61bfj+-wArL._SY522_.jpg", category: "Money" },
  { title: "Think And Grow Rich Original 1937 Edition", price: "₹481", img: "https://m.media-amazon.com/images/I/41NZi+UK+qL._SY445_SX342_ControlCacheEqualizer_.jpg", category: "Money" },
  { title: "Rich Dad Poor Dad", price: "₹299", img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UL320_SR320,320_.jpg", category: "Money" },
  { title: "The Intelligent Investor", price: "₹599", img: "https://m.media-amazon.com/images/I/91+v5Kz5Q+L._AC_UL320_SR320,320_.jpg", category: "Money" },
  { title: "The Psychology of Money", price: "₹399", img: "https://m.media-amazon.com/images/I/71g2ednj0sL._AC_UL320_SR320,320_.jpg", category: "Money" },
  { title: "Cashflow Quadrant", price: "₹449", img: "https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_UL320_SR320,320_.jpg", category: "Money" },
  
  // AI Category
  { title: "Generative AI 360", price: "₹1,690", img: "https://m.media-amazon.com/images/I/71wd8CxVCNL._SY522_.jpg", category: "AI" },
  { title: "AI Engineering: Building Applications with Foundation Models", price: "₹2,500", img: "https://m.media-amazon.com/images/I/71zFkvCcY4L._AC_UY436_FMwebp_QL65_.jpg", category: "AI" },
  { title: "Prompt Engineering", price: "₹949", img: "https://m.media-amazon.com/images/I/71JddPW6vrL._AC_UY436_FMwebp_QL65_.jpg", category: "AI" },
  { title: "Engineering AI Systems", price: "₹4,895", img: "https://m.media-amazon.com/images/I/51YGIdn3gPL._SY445_SX342_.jpg", category: "AI" },
  { title: "Artificial Intelligence: A Modern Approach", price: "₹1,899", img: "https://m.media-amazon.com/images/I/81vQhN5sLxL._AC_UL320_SR320,320_.jpg", category: "AI" },
  { title: "Deep Learning", price: "₹2,299", img: "https://m.media-amazon.com/images/I/71xomgZbVEL._AC_UL320_SR320,320_.jpg", category: "AI" },
  { title: "Machine Learning Yearning", price: "₹799", img: "https://m.media-amazon.com/images/I/81vQhN5sLxL._AC_UL320_SR320,320_.jpg", category: "AI" },
  { title: "Neural Networks and Deep Learning", price: "₹1,499", img: "https://m.media-amazon.com/images/I/81vQhN5sLxL._AC_UL320_SR320,320_.jpg", category: "AI" },
  
  // Programming Category
  { title: "C++ Programming Language", price: "₹1,100", img: "https://m.media-amazon.com/images/I/5197qo6Q1GL._AC_UY436_FMwebp_QL65_.jpg", category: "Programming" },
  { title: "Mastering OpenCV 4 with Python", price: "₹3,599", img: "https://m.media-amazon.com/images/I/71l5e-22w8L._AC_UY436_FMwebp_QL65_.jpg", category: "Programming" },
  { title: "Programming with Java", price: "₹640", img: "https://m.media-amazon.com/images/I/51xiwRkS2oL._AC_UY436_QL65_.jpg", category: "Programming" },
  { title: "Java Programming", price: "₹9,201", img: "https://m.media-amazon.com/images/I/51AZRevuX0L._SY522_.jpg", category: "Programming" },
  { title: "Python Crash Course", price: "₹899", img: "https://m.media-amazon.com/images/I/71NUZ+rEU2L._AC_UL320_SR320,320_.jpg", category: "Programming" },
  { title: "Clean Code", price: "₹1,299", img: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UL320_SR320,320_.jpg", category: "Programming" },
  { title: "The Pragmatic Programmer", price: "₹1,199", img: "https://m.media-amazon.com/images/I/91WFb-Ppo5L._AC_UL320_SR320,320_.jpg", category: "Programming" },
  { title: "JavaScript: The Definitive Guide", price: "₹1,599", img: "https://m.media-amazon.com/images/I/51wblJIM1FL._AC_UL320_SR320,320_.jpg", category: "Programming" },
  { title: "React: Up & Running", price: "₹1,099", img: "https://m.media-amazon.com/images/I/71NUZ+rEU2L._AC_UL320_SR320,320_.jpg", category: "Programming" },
  { title: "Node.js Design Patterns", price: "₹1,399", img: "https://m.media-amazon.com/images/I/71l5e-22w8L._AC_UY436_FMwebp_QL65_.jpg", category: "Programming" },
  
  // Biopic Category
  { title: "M S Dhoni: Captain Cool", price: "₹162", img: "https://m.media-amazon.com/images/I/41IU+HNZHRL._SY445_SX342_ControlCacheEqualizer_.jpg", category: "Biopic" },
  { title: "Wings Of Fire An Autobiograph", price: "₹334", img: "https://m.media-amazon.com/images/I/51wbVQTpTgL._SY445_SX342_ControlCacheEqualizer_.jpg", category: "Biopic" },
  { title: "World's Greatest Leaders", price: "₹199", img: "https://m.media-amazon.com/images/I/71MHjHxMPVL._SY522_.jpg", category: "Biopic" },
  { title: "The Story of My Experiments with Truth Mahatma Gandhi", price: "₹469", img: "https://m.media-amazon.com/images/I/61BlT1KdGWL._SY522_.jpg", category: "Biopic" },
  { title: "Steve Jobs: The Exclusive Biography", price: "₹599", img: "https://m.media-amazon.com/images/I/81VStYnDGrL._AC_UL320_SR320,320_.jpg", category: "Biopic" },
  { title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future", price: "₹549", img: "https://m.media-amazon.com/images/I/71Q5VE4dxjL._AC_UL320_SR320,320_.jpg", category: "Biopic" },
  { title: "Shoe Dog: A Memoir by the Creator of Nike", price: "₹499", img: "https://m.media-amazon.com/images/I/81z7F2sX0xL._AC_UL320_SR320,320_.jpg", category: "Biopic" },
  { title: "The Autobiography of Benjamin Franklin", price: "₹299", img: "https://m.media-amazon.com/images/I/81VStYnDGrL._AC_UL320_SR320,320_.jpg", category: "Biopic" }
];

const BookStore = () => {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset to show all books when component mounts or route changes
    setSelectedCategory("All");
    setShowForm(false);
    setSelectedBook(null);
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/books');
      if (!response.ok) {
        throw new Error(`Failed to fetch books: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Fetched books from API:', data);
      // Use API data if available, otherwise use fallback
      setBooks(data && data.length > 0 ? data : fallbackBooks);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books from API, using fallback data:', error);
      // Use fallback books if API fails
      setBooks(fallbackBooks);
      setLoading(false);
    }
  };

  const handleBuyNow = (bookTitle) => {
    setSelectedBook(bookTitle);
    setShowForm(true);
  };

  const visibleBooks = selectedCategory === "All"
    ? books
    : books.filter(book => book.category === selectedCategory);

  if (loading) {
    return <div className="container"><h1>Loading books from MongoDB...</h1></div>;
  }

  return (
    <>
      <style>{`
        html, body {
          background: #000000;
          color: #fff;
          font-family: 'Segoe UI', Arial, sans-serif;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }
        #root {
          background: #000000;
        }
        .container {
          max-width: 960px;
          margin: 40px auto;
          padding: 20px 20px 0 20px;
        }
        .category-select-container {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 26px;
        }
        select {
          padding: 8px 14px;
          font-size: 1rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          outline: none;
          font-weight: bold;
          color: #240592;
          background-color: #fff;
          transition: color 0.3s, background-color 0.3s;
        }
        select.all-selected {
          color: #fff !important;
          background-color: #240592 !important;
        }
        h1 {
          text-align: center;
          margin-bottom: 30px;
        }
        .book-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }
        .book-card {
          background: #fff;
          color: #333;
          border-radius: 12px;
          box-shadow: 0 3px 10px rgba(44,62,80,0.1);
          padding: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .book-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 8px 20px rgba(44,62,80,0.16);
        }
        .book-cover {
          height: 140px;
          width: auto;
          margin-bottom: 12px;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(36,5,146,0.12);
        }
        .book-title {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 6px;
          text-align: center;
        }
        .book-price {
          font-size: 1.1rem;
          color: #240592;
          font-weight: bold;
          margin-bottom: 14px;
        }
        .buy-btn {
          padding: 8px 22px;
          border: none;
          background: #240592;
          color: #fff;
          border-radius: 20px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
          text-decoration: none;
        }
        .buy-btn:hover {
          background: #4626c3;
        }
        /* Overlay for popup effect */
        .popup-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        @media (max-width: 600px) {
          .container {
            padding: 8px;
          }
          .book-list {
            gap: 16px;
          }
          .book-card {
            padding: 10px;
          }
          .category-select-container {
            justify-content: center;
          }
        }
      `}</style>

      <div className="container">
        {!showForm ? (
          <>
            <div className="category-select-container">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Select book category"
                className={selectedCategory === "All" ? "all-selected" : ""}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <h1>Books Available for Purchase</h1>

            {visibleBooks.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#fff' }}>
                <p>No books found.</p>
                <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
                  Make sure:
                </p>
                <ul style={{ textAlign: 'left', display: 'inline-block', fontSize: '0.9rem', marginTop: '10px' }}>
                  <li>Backend server is running: <code style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '4px' }}>cd backend && npm start</code></li>
                  <li>MongoDB is running: <code style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '4px' }}>brew services start mongodb-community</code></li>
                  <li>Database is seeded: <code style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '4px' }}>cd backend && npm run seed</code></li>
                </ul>
                <p style={{ fontSize: '0.9rem', marginTop: '15px', color: '#ffd700' }}>
                  Check the browser console for detailed error messages.
                </p>
              </div>
            ) : (
              <div className="book-list">
                {visibleBooks.map(book => (
                  <div className="book-card" key={book.title}>
                    <img className="book-cover" src={book.img} alt={book.title} />
                    <div className="book-title">{book.title}</div>
                    <div className="book-price">{book.price}</div>
                    <button
                      className="buy-btn"
                      onClick={() => handleBuyNow(book.title)}
                    >
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="popup-overlay">
            <InformationForm
              bookName={selectedBook}
              onClose={() => setShowForm(false)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BookStore;
