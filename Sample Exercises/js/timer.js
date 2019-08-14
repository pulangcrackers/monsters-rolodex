let startTime = () => {


    let sec = document.getElementById("sec");
    let min = document.getElementById("min");
    let time = document.getElementById('timer').value;

    sec.innerHTML = "00";
    min.innerHTML = "00";

    let minHandler = 0;
    let counter = 0;
    let total ;

    let addZero = (num) => {
        if(num<10) {
            return num = "0" + num;
        }
        else {
            return num = num;
        }
    }

    const timer = setInterval(() => {
        total = (counter + (minHandler*60) * 1) + 1
        if(counter!=time) {
            counter++;
            sec.innerHTML = addZero(counter);

            while(counter % 60 === 0) {
                min.minHandler++;
                sec.innerHTML = "00";
                min.innerHTML = addZero(minHandler += 1);
                counter = 0;
                break;
            }
            if(total == time) {
                clearInterval(timer)
            }
        }
    }, 100);
}