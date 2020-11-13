console.log('Hello from js');

$(document).ready(readyNow)

function readyNow(){
    console.log('Hello from JQ');
    $('#calculateInput').on('click', calculateInput);
}

function calculateInput(){
    console.log('Calculating inputs');
    let firstInput = $('#input1').val();
    let secondInput = $('#input2').val();

}