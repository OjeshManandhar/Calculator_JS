let flag = 1;
let firstNum = 0;
let secondNum = 0;
let operator;

function CE() {
    console.log("CE()");

    firstNum = secondNum= 0;
    document.getElementById("display").value = '';
}

function operation(op) {
    console.log("operation(" + op + ")");
    operator = op;
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
    else {
        if (secondNum < Math.pow(10, 14)) {
            secondNum = secondNum*10 + num

            console.log("secondNum = " + secondNum);
            document.getElementById("display").value = firstNum;
        }
    }
}