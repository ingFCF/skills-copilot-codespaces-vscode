// Create web server
const express = require('express');
const app = express();
// Create comments array
const comments = [];
// Create comments counter
let commentsCounter = 1;
// Create comments route
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Create add comments route
app.post('/comments', (req, res) => {
  const comment = { id: commentsCounter, body: req.body.body };
  comments.push(comment);
  commentsCounter++;
  res.json(comment);
});
// Create comments id route
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  res.json(comment);
});
// Create comments id update route
app.put('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  comment.body = req.body.body;
  res.json(comment);
});
// Create comments id delete route
app.delete('/comments/:id', (req, res) => {
  const index = comments.findIndex(comment => comment.id === parseInt(req.params.id));
  comments.splice(index, 1);
  res.json({ message: 'Comment deleted' });
});
// Listen to port 4001
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});