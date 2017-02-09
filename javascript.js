var minutes = 0;
var seconds = 0;
var setTime;
var timerStatus = 1;

function program() {
    var start = Date.now(),
      duration = document.getElementById('timeDuration').value * 60  ,
      diff;
	var programInterface = {
		startTimer : function(){

		  if((duration <= 0) || (Number.isInteger(value) === false)){
       alert("Enter valid number");
      }else{
	  diff =  duration - (((Date.now() - start) / 1000) | 0);
          minutes = (diff / 60) | 0;
          seconds = (diff % 60) | 0;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          document.getElementById("minutes").innerHTML = minutes;
          document.getElementById("seconds").innerHTML = seconds;
          }
          if (diff <= 0) {
                clearTimeout(setTime);
          }else{
              setTime = setTimeout(programInterface.startTimer, 1000);
            }},
		reset : function() {
			clearTimeout(setTime);
			minutes = "00";
			seconds = "00";
    	  document.getElementById("minutes").innerHTML = minutes;
          document.getElementById("seconds").innerHTML = seconds;
		},
    paus : function(){
			if(timerStatus == 1){
				timerStatus = 0;
		    clearTimeout(setTime);
			}
			else{
				timerStatus = 1;
				duration = (minutes * 60 ) + seconds;
				start = Date.now();
				setTimeout(programInterface.startTimer, 1000);
			}
		}
  }
  return programInterface;
}
