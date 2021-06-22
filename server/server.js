const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/book.router.js');
const uploadRouter = require('./routes/upload.router.js');
const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('books.csv')
  .pipe(csv())
  .on('data', (row) => {
    //console.log(row);
  })
  .on('end', () => {
    //console.log('CSV file successfully processed');
  });

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/books', booksRouter);
app.use('/upload', uploadRouter);


// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
