var card = document.getElementById('card');
var msg = document.getElementById('msg');
var clockcard = document.getElementById('clockcard');
var alarmAudio = new Audio('alarm_sound.mp3');
var clockAudio = new Audio('tick.mp3');
var fountainLeft = document.querySelector('.fountain.left');
var fountainRight = document.querySelector('.fountain.right');

card.addEventListener('mouseover', function(){
    card.style.backgroundColor = "green";
    msg.innerHTML = "You're IN";
});
card.addEventListener('mouseout', function(){
    card.style.backgroundColor = "red";
    msg.innerHTML = "You're OUT";
});
card.addEventListener('click', function(){
    card.style.backgroundColor = "yellow";
    msg.innerHTML = "You Clicked !";
});

window.setInterval(updateclock, 1000);
updateclock();

function updateclock(){
    var date = new Date();
    var hours = date.getHours().toString().padStart(2,'0');
    var mins = date.getMinutes().toString().padStart(2,'0');
    var secs = date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML = hours + ":" + mins + ":" + secs;

    if (secs === "00") {
        playAlarm();
    }
    else{
        playAlarm1();
    }
}

function playAlarm1() {
    clockAudio.currentTime = 0;
    clockAudio.play();}

function playAlarm() {
    alarmAudio.currentTime = 0;
    alarmAudio.play();


    clockcard.classList.add('shake');

    fountainLeft.classList.add('on');
    fountainRight.classList.add('on');

    setTimeout(function() {
        clockcard.classList.remove('shake');
        fountainLeft.classList.remove('on');
        fountainRight.classList.remove('on');
    }, 1000);
}
