console.log('Hello from js');

$(document).ready(readyNow)

// declaring operator globally 
let operator;

function readyNow() {
    console.log('Hello from JQ');
    $('#equals').on('click', calculateInput);
    $('#add-Btn').on('click', calculation);
    $('#minus-Btn').on('click', calculation);
    $('#mult-Btn').on('click', calculation);
    $('#div-Btn').on('click', calculation);
// click handler to clear input on click of C button
    $('#clearInput').on('click', clearInput);
    getNumbers();
}

function calculateInput(event) {
    event.preventDefault();
    console.log('Calculating inputs');
    // store input element values into variables
    let firstInput = $('#input1').val();
    let secondInput = $('#input2').val();
    // storing variables created into object
    let array = {
        firstNumber: firstInput,
        secondNumber: secondInput,
        operator: operator
    }
    console.log('Numbers are:', array);

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: array
    }).then(function (response) {
        // Then is run if you get a good response from the server
        console.log('Added successfully!');
        // clear inputs
        $('#input1').val('');
        $('#input2').val('');
        getNumbers();
    })
}



// $('#add-Btn').on('click', calculation);
// $('#minus-Btn').on('click', calculation);
// $('#mult-Btn').on('click', calculation);
// $('#div-Btn').on('click', calculation);
// $('#clearInput').on('click', clearInput);

function calculation(event) {
    event.preventDefault();
// this, is the button clicked on
// .text() grabs text between button tags
    operator = $(this).text();
    console.log('Operator', operator);
}

function clearInput(event){
    event.preventDefault();
    console.log('Clearing input');
    $('#input1').val('');
    $('#input2').val('');
}

function getNumbers(){ // gets the results from server side
    $.ajax({
        method: 'GET',
        url: '/calculator',
    }).then(function (response) {
        console.log('Got messages', response);
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
// let expression = {
//     number1 = null,
//     number2: null,
//     operator: null
// }

// Adding this into click hander in line function 

    // $('#add-Btn').on('click', function () {expression.operator = '/plus');
    // $('#minus-Btn').on('click', function () {expression.operator = '/plus');
    // $('#mult-Btn').on('click', function () {expression.operator = '/plus');
    // $('#div-Btn').on('click', function () {expression.operator = '/plus');

// for (objects of calculatorArray)
//     let result = 0;
// if (objects.operator == ‘/plus’) {
//     result = Number(objects.number1) + Number(objects.number2);
// }
// else if (objects.operator == ‘/minus’){
//     result = Number(objects.number1) - Number(objects.number2);
// }
// else if (objects.operator == ‘/multiply’){
//     result = Number(objects.number1) * Number(objects.number2);
// }
// else if (objects.operator == ‘divide’) {
//     result = Number(objects.number1) / Number(objects.number2);
// }
