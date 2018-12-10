let flag = 1;
let flagResult = 0;
let firstNum = 0;
let secondNum = 0;
let result = 0;
let operator = '=';
let decimalFlag = 0;
let decimalPlace = 0;

function CE() {
    console.log("CE()");

    flag = 1;
    flagResult = 0;
    firstNum = 0;
    secondNum = 0;
    result = 0;
    operator = '=';
    decimalFlag = 0;
    decimalPlace = 0;

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
    decimalFlag = 0;
    decimalPlace = 0;
}

function clickedNumber(num) {
    console.log("clickedNumber(" + num + ")");

    if (flagResult === 1) {
        flagResult = 0;
    }

    if (decimalFlag === 1 && num === -1) {
        decimalFlag = 2;
        num = 0;
    }

    if (num === -1){
        num = 0;
        decimalFlag = 1;
        decimalPlace = 1;
    }

    if (flag === 1) {
        if (firstNum < Math.pow(10, 14)) {
            if (decimalFlag === 1) {
                firstNum = firstNum + num/decimalPlace;
                decimalPlace *= 10;
            }
            else if (decimalFlag === 0) {
                firstNum = firstNum*10 + num
            }
            else if (decimalFlag === 2) {
                decimalFlag = 1;
            }

            console.log("firstNum = " + firstNum);
            document.getElementById("display").value = firstNum;
        }
    }
    else if (flag === 2) {
        if (secondNum === 0) {
            document.getElementById("display").value = '';
        }

        if (secondNum < Math.pow(10, 14)) {
            if (decimalFlag === 1) {
                secondNum = secondNum + num/decimalPlace;
                decimalPlace *= 10;
            }
            else if (decimalFlag === 0) {
                secondNum = secondNum*10 + num
            }
            else if (decimalFlag === 2) {
                decimalFlag = 1;
            }

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