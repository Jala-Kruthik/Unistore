import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => (
  <>
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Unique-Store</h1>
        <p>
          Welcome to Unistore — your unified place to buy books online.
        </p>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon" role="img" aria-label="books">📚</div>
            <h3>🔍 Search The Books you want</h3>
            <p>
              Find what you need easily with user-friendly categories, powerful search, filtering, and sorting options.
            </p>
            <p>
              <Link to="/search">
                <button>Go to Search Books</button>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Register Section */}
      

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>
          For questions or feedback:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:jalakruthik2810@gmail.com">jalakruthik2810@gmail.com</a>
        </p>
        <p>
          <strong>Mobile:</strong>{" "}
          <a href="tel:+918341712810">8341712810</a>
        </p>
      </section>
    </main>

    {/* Footer */}
    <footer>
      &copy; 2025 Unique-Store.
    </footer>
    
    {/* Information Form */}
  </>
);

export default HomePage;
