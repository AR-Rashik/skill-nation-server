const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
  res.send('Courses API running');
});

app.get('/course-categories', (req, res) => {
  res.send(categories);
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedCategory = course.find(c => c.category_id === id);
  res.send(selectedCategory);
})

app.listen(port, () => {
  console.log(`skill nation server running on the port ${port}`)
});