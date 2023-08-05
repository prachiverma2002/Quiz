let time=120;
let counter;
function countDownTimer(){
    let display=document.getElementById("timer");

    display.innerHTML=time;
    time--;
    if(time<0){
        clearInterval(counter);
alert("Sorry! Your time is Over);
        window.location.href="Subject.html";
    }
}
function startTimer(){
    counter=setInterval(countDownTimer,1000);
}
startTimer();
