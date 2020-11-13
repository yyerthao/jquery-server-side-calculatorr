console.log('Hello from js');

$(document).ready(readyNow)

function readyNow(){
    console.log('Hello from JQ');
    $('#calculateInput').on('click', calculateInput);


}

function calculateInput(event){
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
}


// function getInput(){
//     $.ajax({
//         method: 'POST',
//         url: '/calculator',
//         data: {
//             inventory: itemName,
//             description: descriptName
//         }
//     }).then(function (response) {
//         // Then is run if you get a good response from the server
//         console.log('Added successfully!');
//         // Get all the items again, so we see the updates
//         // SUPER INTERESTING, we need get the items again 
//         getItems();
//         // clear inputs
//         $('#input1').val('');
//         $('#input2').val('');
//     }).catch(function (error) {
//         // console.log & alert the user
//         console.log('Error', error);
//         alert('Something bad happened. Try again later.')
//     })
//     }
