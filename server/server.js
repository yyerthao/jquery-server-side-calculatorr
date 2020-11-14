const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// setting 
const mathCalc = require('./public/scripts/calculator');
const port = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
   

// ---------------- BEGIN ROUTE -----------------------------------------------------------------
// saving messages from client
const calcArray = [];
// grabs information from browser
app.post('/calculator', (req, res) => {
    console.log('Got calculations...', req.body); // req.body = mathObject
    let answer = mathCalc(req.body); // will return an object 
    console.log('Answer from server', answer);
    calcArray.unshift(answer); // req.body is same as data:array from client.js
    res.sendStatus(200); // 200 is an OK status
});

// once get calculated results, you can send results back to client side
app.get('/calculator', (req, res) => {
    console.log('Getting calculations...');
// sends over array, which contains original data along with answer
    res.send(calcArray);
});




// ---------------- END ROUTE -----------------------------------------------------------------

// Tell our server to start listening for requests on our port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});