
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));


// ---------------- BEGIN ROUTE -----------------------------------------------------------------

const catArray = ['Abby', 'Kyo', 'Fred'];

// Route to GET Mary's cats
app.get('/calculator', (req, res) => {
    console.log('Sending calculated data...');
    res.send(catArray);
});

app.post('/calculator', (req, res) => {
    let calcdata = req.body
    console.log('Getting calculated data...', calcdata);
    catArray.push(calcdata);
    calcdata
    res.sendStatus(200); // 200 is an OK status
});

// ---------------- END ROUTE -----------------------------------------------------------------

// Tell our server to start listening for requests on our port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
