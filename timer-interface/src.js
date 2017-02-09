var minutes = 0;
var seconds = 0;
var setTime;
var timerStatus = 0;

function program() {
    var start = Date.now(),
      duration,
      diff;
	var programInterface = {
		startTimer : function(){
      duration = document.getElementById('timeDuration').value * 60 ;
		  if(duration < 0 ){
       alert("Enter valid number");
      }else{
				diff =  (((Date.now() - start) / 1000) | 0);
      //  document.getElementById("minutes").value = minutes;
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
		}
  }
  return programInterface;
}
