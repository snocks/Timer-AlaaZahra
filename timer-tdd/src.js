function program(duration){
	var programInterface = {
		startTimer : function(){
			if((duration < 0 )|| (Number.isInteger(duration)) === false)
				return "Enter valid number";

		}
	}
    

  return programInterface;
}
