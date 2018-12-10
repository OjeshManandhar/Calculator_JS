let firstNum = 0;
let secondNum = 0;

function clearArea() {
    console.log("clearArea()");

    firstNum = 0;
    document.getElementById("display").value = '';
}

function clickedNumber(num) {
    console.log(firstNum);

    if (firstNum < Math.pow(10, 14)) {
        console.log("clickedNumber(" + num + ")");

        firstNum = firstNum*10 + num
        document.getElementById("display").value = firstNum;
    }
}

function operation(op) {
    console.log("operation(" + op + ")");
}