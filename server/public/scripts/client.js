console.log('Hello from js');

$(document).ready(readyNow)

// declare variable called operator to store 
// the text.() of the operator signs from buttons on DOM
let operator;

function readyNow() {
    console.log('Hello from JQ');
    $('#equals').on('click', handleMessage);
    $('#add-Btn').on('click', calculation);
    $('#minus-Btn').on('click', calculation);
    $('#mult-Btn').on('click', calculation);
    $('#div-Btn').on('click', calculation);
// click handler to clear input on click of C button
    $('#clearInput').on('click', clearInput);
// shows any messages from the server at refresh
    getNumbers();
}

// function to handleMessage
function handleMessage(event) {
    event.preventDefault();
    // console.log('Calculating inputs');
    // store input element values into variables
    let firstInput = $('#input1').val();
    let secondInput = $('#input2').val();
    // storing variables created into object
    let mathObject = {
        firstNumber: firstInput,
        secondNumber: secondInput,
        operator: operator
    }
    console.log('Numbers are:', mathObject);

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: mathObject
    }).then(function (response) { // send mathObject to server 
        // Then is run if you get a good response from the server
        // console.log('Added successfully!');
        // clear inputs
        $('#input1').val('');
        $('#input2').val('');
    // gets information from server side again to see results
        getNumbers();
    })
}


// $('#add-Btn').on('click', calculation);
// $('#minus-Btn').on('click', calculation);
// $('#mult-Btn').on('click', calculation);
// $('#div-Btn').on('click', calculation);



// function for actual calculation ??? 
function calculation(event) {
    event.preventDefault();
// this refers to button clicked on
// .text() grabs text between button tags
// in this case, it grabs the operator signs 
// of whatever button clicked on
    operator = $(this).text();
    console.log('Operator', operator);
}

// function to clear input from input elements
function clearInput(event){
    event.preventDefault();
    console.log('Cleared input');
// setter, setting input elements back to empty strings
    $('#input1').val('');
    $('#input2').val('');
}

function getNumbers(){ // gets the results from server side
    $.ajax({
        method: 'GET',
        url: '/calculator',
    }).then(function (response) { 
// response turns into an array
// response[0] = most recent calculations
// response[0].answer = most recent answer 
        console.log('Got messages', response);
        console.log('Got messages', response[0]);
        console.log('Got messages', response[0].answer);
// everytime you do a post, go back to get from server
        renderNumbers(response);
    });
}

function renderNumbers(array) {
    $('#history-list').empty();
    for (let item of array) {
        $('#history-list').append(`<li>${item.firstNumber}: ${item.secondNumber}</li>`)
    }
}








///////////////////////////////////////////////////////////////////////////////////////////
