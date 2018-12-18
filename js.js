let flag = 1;
let flagResult = 0;
let firstNum = '0';
let secondNum = '0';
let result = '0';
let operator = '=';
let decimalFlag = 0;

function CE() {
    console.log("CE()");

    flag = 1;
    flagResult = 1;
    firstNum = '0';
    secondNum = '0';
    result = '0';
    operator = '=';
    decimalFlag = 0;

    document.getElementById("display").value = '0';
}

function operation(op) {
    console.log("operation(" + op + ")");

    if (flag === 2 && secondNum !== 0) {
        //work on old operator
        switch (operator) {
        case '/':
            firstNum = (parseFloat(firstNum)/parseFloat(secondNum)).toString();
            break;
        case '*':
            firstNum = (parseFloat(firstNum)*parseFloat(secondNum)).toString();
            break;
        case '-':
            firstNum = (parseFloat(firstNum) - parseFloat(secondNum)).toString();
            break;
        case '+':
            firstNum = (parseFloat(firstNum) + parseFloat(secondNum)).toString();
            break;
        }
        
        secondNum = '0';
    }

    operator = op;

    if (flagResult === 1) {
        firstNum = result;
        secondNum = '0';

        flagResult = 0;
    }

    flag = 2;
    decimalFlag = 0;
}

function clickedNumber(num) {
    console.log("clickedNumber(" + num + ")");

    if (flagResult === 1) {
        flagResult = 0;
        firstNum = '0';
        secondNum = '0';
        decimalFlag = 0;
    }

    if (num === '.'){
        if (decimalFlag === 0) {
            decimalFlag = 1;    //'.' is repeated
        }
        else if (decimalFlag === 1) {
            decimalFlag = 2;
        }
    }

    if (flag === 1) {
        if (firstNum.length < 15) {
            if (firstNum === '0') {
                firstNum = '';
            }
            
            if (decimalFlag === 2) {
                decimalFlag = 1;
            }
            else {
                if (num === '.') {
                    if (firstNum === '') {
                        firstNum += '0.';
                    }
                    else {
                        firstNum += '.';
                    }
                }
                else {
                    firstNum += num;
                }
            }

            console.log("firstNum = " + firstNum);
            document.getElementById("display").value = firstNum;
        }
    }
    else if (flag === 2) {
        if (secondNum === 0) {
            document.getElementById("display").value = '';
        }

        if (secondNum.length < 15) {
            if (secondNum === '0') {
                secondNum = '';
            }
            
            if (decimalFlag === 2) {
                decimalFlag = 1;
            }
            else {
                if (num === '.') {
                    if (secondNum === '') {
                        secondNum += '0.';
                    }
                    else {
                        secondNum += '.';
                    }
                }
                else {
                    secondNum += num;
                }
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
        result = (parseFloat(firstNum)/parseFloat(secondNum)).toString();
        break;
    case '*':
        result = (parseFloat(firstNum)*parseFloat(secondNum)).toString();
        break;
    case '-':
        result = (parseFloat(firstNum) - parseFloat(secondNum)).toString();
        break;
    case '+':
        result = (parseFloat(firstNum) + parseFloat(secondNum)).toString();
        break;
    case '=':
        result = firstNum;
        break;
    }

    document.getElementById("display").value = result;
}