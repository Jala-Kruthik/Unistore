CREATE DATABASE IF NOT EXISTS unistore;
USE unistore;

CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  price VARCHAR(50) NOT NULL,
  img VARCHAR(500) NOT NULL,
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_title VARCHAR(255) NOT NULL,
  customer_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample books
INSERT INTO books (title, price, img, category) VALUES
('The Millionaire Fastlane', '₹364', 'https://m.media-amazon.com/images/I/51EOf29qA0L._SY445_SX342_.jpg', 'Money'),
('The Art of Spending Money', '₹365', 'https://m.media-amazon.com/images/I/71yeCbQhVrL._AC_UY436_FMwebp_QL65_.jpg', 'Money'),
('Think and Grow Rich', '₹199', 'https://m.media-amazon.com/images/I/61bfj+-wArL._SY522_.jpg', 'Money'),
('Think And Grow Rich Original 1937 Edition', '₹481', 'https://m.media-amazon.com/images/I/41NZi+UK+qL._SY445_SX342_ControlCacheEqualizer_.jpg', 'Money'),
('Generative AI 360', '₹1,690', 'https://m.media-amazon.com/images/I/71wd8CxVCNL._SY522_.jpg', 'AI'),
('AI Engineering: Building Applications with Foundation Models', '₹2,500', 'https://m.media-amazon.com/images/I/71zFkvCcY4L._AC_UY436_FMwebp_QL65_.jpg', 'AI'),
('Prompt Engineering', '₹949', 'https://m.media-amazon.com/images/I/71JddPW6vrL._AC_UY436_FMwebp_QL65_.jpg', 'AI'),
('Engineering AI Systems', '₹4,895', 'https://m.media-amazon.com/images/I/51YGIdn3gPL._SY445_SX342_.jpg', 'AI'),
('C++ Programming Language', '₹1,100', 'https://m.media-amazon.com/images/I/5197qo6Q1GL._AC_UY436_FMwebp_QL65_.jpg', 'Programming'),
('Mastering OpenCV 4 with Python', '₹3,599', 'https://m.media-amazon.com/images/I/71l5e-22w8L._AC_UY436_FMwebp_QL65_.jpg', 'Programming'),
('Programming with Java', '₹640', 'https://m.media-amazon.com/images/I/51xiwRkS2oL._AC_UY436_QL65_.jpg', 'Programming'),
('Java Programming', '₹9,201', 'https://m.media-amazon.com/images/I/51AZRevuX0L._SY522_.jpg', 'Programming'),
('M S Dhoni: Captain Cool', '₹162', 'https://m.media-amazon.com/images/I/41IU+HNZHRL._SY445_SX342_ControlCacheEqualizer_.jpg', 'Biopic'),
('Wings Of Fire An Autobiograph', '₹334', 'https://m.media-amazon.com/images/I/51wbVQTpTgL._SY445_SX342_ControlCacheEqualizer_.jpg', 'Biopic'),
('World''s Greatest Leaders', '₹199', 'https://m.media-amazon.com/images/I/71MHjHxMPVL._SY522_.jpg', 'Biopic'),
('The Story of My Experiments with Truth Mahatma Gandhi', '₹469', 'https://m.media-amazon.com/images/I/61BlT1KdGWL._SY522_.jpg', 'Biopic');
