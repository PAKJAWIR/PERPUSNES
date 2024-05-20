const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.redirect('/main'); // Redirect to /main when accessing the root URL
});

// Route for the main page
app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main', 'index.html'));
});

// Route for other pages (if needed)
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Add more routes for other pages here...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Route for the signup page
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login', 'signup.html'));
});

// Route for the Login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login', 'loginform.html'));
});

// Route for the Contact page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main', 'contact.html'));
});

// Route for the E-Book page
app.get('/ebook', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ebook', 'index.html'));
});

// Route for the Gallery page
app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gallery', 'index.html'));
});

// Route for the Article page
app.get('/article', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'article', 'article.html'));
});

