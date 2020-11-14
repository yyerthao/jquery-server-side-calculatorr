
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));


// ---------------- BEGIN ROUTE -----------------------------------------------------------------
// saving messages from client
const calcArray = [];

// grabs info from browser
app.post('/calculator', (req, res) => { 
    console.log('Got message...', req.body);
    calcArray.push(req.body); // req.body is same as data object
    res.sendStatus(200); // 200 is an OK status
});

// once get calculated results, you can send results back to client side
app.get('/calculator', (req, res) => {
    console.log('Getting messages...');
// put loop conditional
    res.send(calcArray);
});


// ---------------- END ROUTE -----------------------------------------------------------------

// Tell our server to start listening for requests on our port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});








