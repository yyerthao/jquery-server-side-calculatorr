console.log('Hello from js');

$(document).ready(readyNow)

function readyNow() {
    console.log('Hello from JQ');
    $('#calculateInput').on('click', calculateInput);
    $('#add-Btn').on('click', calculation);
    $('#minus-Btn').on('click', calculation);
    $('#mult-Btn').on('click', calculation);
    $('#div-Btn').on('click', calculation);
    $('#clearInput').on('click', clearInput);
    getNumbers();
}

function calculateInput(event) {
    event.preventDefault();
// store input element values into variables
    let firstInput = $('#input1').val();
    let secondInput = $('#input2').val();
// storing variables created into object
// and will send this via a POST 
    let array = {
        firstNumber: firstInput,
        secondNumber: secondInput
    }
    console.log('Numbers are:', array);
// jquery to post info to browser?????????????
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
            firstNumber: firstInput,
            secondNumber: secondInput
        }
    }).then(function (response) {
// Then is run if you get a good response from the server
        console.log('Added successfully!');
// clear inputs whenever button gets clicked
        $('#input1').val('');
        $('#input2').val('');
        getNumbers();
        calculation();
    });
}

function calculation() {
    console.log('CALCUATING');
}

function clearInput(){
    console.log('Clearing input');
}

function getNumbers(){
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


