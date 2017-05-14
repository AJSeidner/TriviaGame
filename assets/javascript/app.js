$(document).ready(function(){

 $(".gameScreen").hide();
 $(".endScreen").hide();

 	var correct = 0;
 	var incorrect = 0;
 	var unanswered = 8;

 $("#correct").text(correct);
 $("#incorrect").text(incorrect);
 $("#unanswered").text(unanswered);

	function startTimer(){
	  var counter = 20;
	  	setInterval(function() {
	    		counter--;
	    		if (counter >= 0) {
	      			span = document.getElementById("display");
	      			span.innerHTML = counter;
	    		}
	    		if (counter === 0) {

	        		alert('sorry, out of time');
	        		clearInterval(counter);
	        		$(".startScreen").hide();
	        		$(".gameScreen").hide();
 					$(".endScreen").show();
 				}
	    
	  	}, 1000);	
	}

	
	$("#start").click(function(){
	    startTimer();
	    $(".gameScreen").show();
	    $(".startScreen").hide();
	});

		var i;

 		var a1 = document.getElementsByName("question1");
    			for (i = 0; i < a1.length; i++) {
       					 if (a1[i].checked) {
           		 			if (a1[i].value == "ans") {
                				correct++;
                				$("#correct").text(correct);
                				unanswered--;
                				$("#unanswered").text(unanswered);
                				break;
                			}else if (a1[i].value == "inc") {
                				incorrect++;
								$("#incorrect").text(incorrect);
								unanswered--;
								$("#unanswered").text(unanswered);
								break;
                			}else {
                				$("#correct").text(correct);
 								$("#incorrect").text(incorrect);
 								$("#unanswered").text(unanswered);
 								break;
                			}
                		}
                	}



});