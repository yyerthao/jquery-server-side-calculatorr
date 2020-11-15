
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// the value of mathCalc is from calculator.js
const mathCalc = require('./calculator');
const port = 5000; // creating our port
app.use(express.static('server/public')); // run static files from folder
app.use(bodyParser.urlencoded({
    extended: true
}));
   

// ---------------- BEGIN ROUTE -----------------------------------------------------------------
// saves data from client 
const calcArray = []; 


// route to get mathObject
app.post('/calculator', (req, res) => {
    console.log('Got mathObject...', req.body); // req.body = mathObject
    let answer = mathCalc(req.body); // will return an object 
    console.log('Answer from server', answer);
// unshift to store most recent answer to beginning of array
    calcArray.unshift(answer); 
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