let flag = 1;
let firstNum = 0;
let secondNum = 0;
let operator;

function CE() {
    console.log("CE()");

    flag = 1;
    firstNum = secondNum = 0;
    op = null;

    document.getElementById("display").value = '';
}

function operation(op) {
    console.log("operation(" + op + ")");
    operator = op;

    flag = 2;

    document.getElementById("display").value = '';
}

function clickedNumber(num) {
    console.log("clickedNumber(" + num + ")");

    if (flag === 1) {
        if (firstNum < Math.pow(10, 14)) {
            firstNum = firstNum*10 + num

            console.log("firstNum = " + firstNum);
            document.getElementById("display").value = firstNum;
        }
    }
    else if (flag === 2) {
        if (secondNum < Math.pow(10, 14)) {
            secondNum = secondNum*10 + num

            console.log("secondNum = " + secondNum);
            document.getElementById("display").value = secondNum;
        }
    }
}

function calculate() {
    let result;

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
    }

    document.getElementById("display").value = result;
}