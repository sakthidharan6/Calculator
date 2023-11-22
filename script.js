let displayValue = '';
let operator = '';
let firstOperand = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function setOperator(op) {
    if (displayValue !== '') {
        operator = op;
        firstOperand = displayValue;
        displayValue = '';
        updateDisplay();
    }
}

function calculate() {
    if (operator !== '' && firstOperand !== '' && displayValue !== '') {
        let result;
        const secondOperand = displayValue;

        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                result = 'Error';
        }

        displayValue = result.toString();
        operator = '';
        firstOperand = '';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}
