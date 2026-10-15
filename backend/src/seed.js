import mongoose from 'mongoose';
import Book from './models/Book.js';

const books = [
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
  { title: "Machine Learning Yearning", price: "₹799", img: "https://m.media-amazon.com/images/I/71JddPW6vrL._AC_UY436_FMwebp_QL65_.jpg", category: "AI" },
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
  { title: "The Autobiography of Benjamin Franklin", price: "₹299", img: "https://m.media-amazon.com/images/I/71Q5VE4dxjL._AC_UL320_SR320,320_.jpg", category: "Biopic" }
];

async function seedDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/unistore');
    console.log('Connected to MongoDB');
    
    await Book.deleteMany({});
    console.log('Cleared existing books');
    
    await Book.insertMany(books);
    console.log(`Seeded ${books.length} books successfully`);
    
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seedDatabase();
