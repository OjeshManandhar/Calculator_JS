let flag = 1;
let flagResult = 0;
let firstNum = 0;
let secondNum = 0;
let result = 0;
let operator = '=';

function CE() {
    console.log("CE()");

    flag = 1;
    flagResult = 0;
    firstNum = secondNum = result = 0;
    op = '=';

    document.getElementById("display").value = '0';
}

function operation(op) {
    console.log("operation(" + op + ")");

    if (flag === 2 && secondNum !== 0) {
        //work on old operator
        switch (operator) {
            case '/':
                firstNum = firstNum/secondNum;
                break;
            case '*':
                firstNum = firstNum*secondNum;
                break;
            case '-':
                firstNum = firstNum - secondNum;
                break;
            case '+':
                firstNum = firstNum + secondNum;
                break;
            }
        
        secondNum = 0;
    }

    operator = op;

    if (flagResult === 1) {
        firstNum = result;
        secondNum = 0;

        flagResult = 0;
    }

    flag = 2;
}

function clickedNumber(num) {
    console.log("clickedNumber(" + num + ")");

    if (flagResult === 1) {
        flagResult = 0;
    }

    if (flag === 1) {
        if (firstNum < Math.pow(10, 14)) {
            firstNum = firstNum*10 + num

            console.log("firstNum = " + firstNum);
            document.getElementById("display").value = firstNum;
        }
    }
    else if (flag === 2) {
        if (secondNum === 0) {
            document.getElementById("display").value = '';
        }

        if (secondNum < Math.pow(10, 14)) {
            secondNum = secondNum*10 + num

            console.log("secondNum = " + secondNum);
            document.getElementById("display").value = secondNum;
        }
    }
}

function calculate() {
    flag = 1;
    flagResult = 1;

    switch (operator) {
    case '/':
        result = firstNum/secondNum;
        break;
    case '*':
        result = firstNum*secondNum;
        break;
    case '-':
        result = firstNum - secondNum;
        break;
    case '+':
        result = firstNum + secondNum;
        break;
    case '=':
        result = firstNum;
        break;
    }

    document.getElementById("display").value = result;
}