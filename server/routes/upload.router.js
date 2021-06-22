const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const fileUpload = require('express-fileupload');
router.use(fileUpload());
const csv = require('csv-parser');
const fs = require('fs');
csvtojson = require("csvtojson");



router.post('/', (req, res) => {
     const file = req.files.file;
     csvData = req.files.file.data.toString('utf8');
     csvtojson().fromString(csvData).then((jsonObj) => {
        console.log(jsonObj);
        jsonObj.forEach(element => {
            
        });
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