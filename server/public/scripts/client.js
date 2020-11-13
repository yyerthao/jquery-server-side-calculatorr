console.log('Hello from js');

$(document).ready(readyNow)

function readyNow() {
    console.log('Hello from JQ');
    $('#calculateInput').on('click', calculateInput);
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
        secondNumber: secondInput
    }
    console.log('Numbers are:', array);
    
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
        // clear inputs
        $('#input1').val('');
        $('#input2').val('');
        getNumbers();
    })
}



function getNumbers(){
    $.ajax({
        method: 'GET',
        url: '/calculator',
    }).then(function (response) {
        console.log('Got messages', response);
        // everytime you do a post, go back to get from server
        renderNumbers(response);
    })
}

function renderNumbers(array) {
    $('#history-list').empty();
    for (let item of array) {
        $('#history-list').append(`<li>${item.firstNumber}: ${item.secondNumber}</li>`)
    }
}