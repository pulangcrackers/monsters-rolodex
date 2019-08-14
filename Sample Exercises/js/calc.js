function myCalculator(operator){
    let firstNum = Number (document.getElementById("firstNum").value);
    let secondNum = Number (document.getElementById("secondNum").value);
    let result = Number (document.getElementById("result").value);a
switch (operator){
    case '+':
        total = firstNum + secondNum
        document.getElementById('result').innerHTML = total
        break;
    case '-':
        total = firstNum - secondNum
        document.getElementById('result').innerHTML = total
        break;
    case '*':
        total = firstNum * secondNum
        document.getElementById('result').innerHTML = total
        break; 
    case '/':
        total = firstNum / secondNum
        document.getElementById('result').innerHTML = Math.round(total*100)/100
        break;
    }
}
