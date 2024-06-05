const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

app.get('/bootstrap', (req, res) => {
  res.sendFile(path.join(__dirname, 'bootstrap.html'));
});

app.get('/tailwind', (req, res) => {
  res.sendFile(path.join(__dirname, 'tailwind.html'));
});

app.post('/api', (req, res) => {
  if (req.body.lib === 'bootstrap') {
    res.sendFile(path.join(__dirname, 'bootstrap.html'));

    return;
  }

  if (req.body.lib === 'tailwind') {
    res.sendFile(path.join(__dirname, 'tailwind.html'));

    return;
  }

  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
