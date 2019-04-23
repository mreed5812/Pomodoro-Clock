
const timeDisplay = document.querySelector("#time");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
var countingDown = false;
var audio = new Audio('boxing.wav'); // define your audio

function startClock(){
		audio.play();
		// Set the date to current date and time
		startBtn.innerHTML = "Pause";
		var countDownDate = new Date();
		
		countDownDate.setMinutes(countDownDate.getMinutes()+30);

		// Update the count down every 1 second
		var x = setInterval(function () {
			if(countingDown == true){
				// Get todays date and time
			    var now = new Date().getTime();

			    // Find the distance between now and the count down date
			    console.log(countDownDate);
			    console.log(now);
			    var distance = countDownDate - now;
			   
			    // Time calculations for minutes and seconds
			    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			    // Output the result in an element with id="demo"
			    document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";

			    // If the count down is over, write some text 
			    if (distance < 0) {
			        clearInterval(x);
			        reset();
			    }
			}
	  
	}, 1000);
}





function reset(){
	document.getElementById("time").innerHTML = "25m 00s";
}

//start button event
startBtn.addEventListener('click', function(){
	countingDown = true;
   startClock();
});
//stop button event
stopBtn.addEventListener('click', function(){
	countingDown = false;
});

function newFunction() {
    let currentTime;
}
