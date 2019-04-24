
const display = document.querySelector("#time");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const workStatus = document.querySelector("h2");
var minutes = 60 * 25;
var isPaused = false;
var isRunning = false;
var audio = new Audio('boxing.wav'); // define your audio



		// Set the date to current date and time

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    seconds = 0;
    //change start to pause
    chgToPause();

    audio.play();
    setInterval(function () {
        if(!isPaused && isRunning){
             minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + "m " + seconds + "s";

            if (--timer < 0) {
                timer = duration;
            }
        }
        else{
            return 0;
        } 
       
    }, 1000);
}

function reset(){
    window.location.reload(false);
	//document.getElementById("time").innerHTML = "25m 00s";
    //isPaused = false;
    //isRunning = false;
    //startBtn.innerHTML = "Start";
    //minutes = null;
}

function chgToPause(){
    startBtn.innerHTML = "Pause";
}

function pauseTimer(){
    startBtn.innerHTML = "Resume";
    isPaused = true;
}

function resumeTimer(){
    startBtn.innerHTML = "Pause";
    isPaused = false;
}

//start button event
startBtn.addEventListener('click', function(){
	if(startBtn.innerHTML == "Pause"){
        pauseTimer();
    }
    else if(startBtn.innerHTML == "Resume"){
        resumeTimer();
    }
    else{
        isRunning = true;
        workStatus.innerHTML = "Work"
        startTimer(minutes, display);
    }
   
});
//stop button event
stopBtn.addEventListener('click', function(){
    isRunning = false;
    reset();
});;

function newFunction() {
    let currentTime;
}
