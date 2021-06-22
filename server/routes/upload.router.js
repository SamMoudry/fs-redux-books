const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const fileUpload = require('express-fileupload');
router.use(fileUpload());
const csv = require('csv-parser');
const fs = require('fs');
csvtojson = require("csvtojson");



router.post('/', (req, res) => {
    pool.query('BEGIN')
    //takes the file.data and turns it into a string
     csvData = req.files.file.data.toString('utf8');
     //turns the string to a json array of objects
     csvtojson().fromString(csvData).then((jsonObj) => {
        console.log(jsonObj);
        //loops through array of objects and puts them in the database
        jsonObj.forEach(element => {
            let queryText = `INSERT INTO "books" ("author", "title")
                   VALUES ($1, $2);`;
            return pool.query(queryText, [element.author, element.title])
        });
        pool.query('COMMIT')
        res.sendStatus(201);
      });
    //  fs.createReadStream(file.data)
    // .pipe(csv())
    // .on('data', (row) => {
    //     console.log(row);
    // })
    // .on('end', () => {
    //     console.log('CSV file successfully processed');
    // });
});

module.exports = router;