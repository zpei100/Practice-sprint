const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, '../dist')));
















app.listen(3000, '127.0.0.1', function() {
  console.log('Application is running on port 3000')
})