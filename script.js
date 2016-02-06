$( document ).ready( function(){

	$("#check").on("click", checkAnswers);

})

var checkAnswers = function(){

	console.log("Check answers run")
	var right = 0;

	if(document.getElementById('cream').checked) {
  		right++
  		$("#q1").removeClass("wrong");
  		console.log("Q1 is right");
	}else {
  		$("#q1").addClass("wrong");
  		console.log("Q1 is wrong");
	}

	if(document.getElementById('yes').checked) {
  		right++
  		$("#q2").removeClass("wrong");
  		console.log("Q2 is right");
	}else {
  		$("#q2").addClass("wrong");
  		console.log("Q2 is wrong");
	}

	if(document.getElementById('men').checked) {
  		right++
  		$("#q3").removeClass("wrong");
  		console.log("Q3 is right");
	}else {
  		$("#q3").addClass("wrong");
  		console.log("Q3 is wrong");
	}

	if(document.getElementById('mama').checked) {
  		right++
  		$("#q4").removeClass("wrong");
  		console.log("Q4 is right");
	}else {
  		$("#q4").addClass("wrong");
  		console.log("Q4 is wrong");
	}

	if(document.getElementById('snoop').checked) {
  		right++
  		$("#q5").removeClass("wrong");
  		console.log("Q5 is right");
	}else {
  		$("#q5").addClass("wrong");
  		console.log("Q5 is wrong");
	}

	console.log(right)

	if(right == 5){
		alert("5/5. Ain't nothin' but a G thang, baby!");
	} else{
		alert(right + "/5. Check yo self before you wreck yo self!");
	}

}
