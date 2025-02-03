// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the comments router
app.use('/comments', require('./comments'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});