const express = require('express');
const logger = require('morgan');
const path = require('path');

var app = express();

app.use(logger('combined'));
app.use(express.static(path.join(__dirname,'/../','dist')));

app.get("*",(req,res) => {
    res.status(200).sendFile(path.join(__dirname,'/../dist','index.html'));
});

var port = process.env.PORT || 9000;

app.listen(port,() => {
    console.log(`App listening on port ${port}`);
});