// module.exports = 
module.exports = calculator;

function calculator(data) {
    console.log('First number', data.firstNumber);
    console.log('Second number', data.secondNumber);
    console.log('Operator', data.operator);

    // conditional goes here
    let result;
    switch (data.operator) {
        case '+':
            console.log('Data', Number(data.firstNumber));
            result = (Number(data.firstNumber) + Number(data.secondNumber));
            console.log('Results:', result);
            break;
        case '-':
            result = Number(data.firstNumber) - Number(data.secondNumber);
            break;
        case '*':
            result = Number(data.firstNumber) * Number(data.secondNumber);
            break;
        case '/':
            result = Number(data.firstNumber) / Number(data.secondNumber);
            break;
    }
    data.answer = result;
    console.log('Here is the new object', data);
    return data;
}

