function revealMessage(){
    document.getElementById("hiddenMessage").style.display="block";

}

function countDown(){
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = 1;
    if (currentVal = 0){
        newVal = currentVal - 1;
    }
    document.getElementById("countDownButton").innerHTML = newVal;

}
