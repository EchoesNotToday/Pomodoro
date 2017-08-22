/*$('#startbutton').click(function(){
	var seconds = 5;
	function countdown(){
		var x = setTimeout(countdown,1000);
		$('#countdown').html(seconds);
		seconds--;


		if(seconds<0){
			$('#end').html("This is the end.")
			clearTimeout(x);
		}
		
	}
	countdown();

});*/
$(document).ready(function () {
    var minutes = 0;
    var seconds = 0;
    var timer = 0;
//Démarrer Timer
    $("#workbutton").click(function () {
        timer = 1500;
        minutes = 25;
        seconds = 0;
        $("#timer").html(minutes + "m " + seconds + "s");
    });
    $("#startbutton").click(function () {
        x = setInterval(countdown, 1000);
    });
//Décrémentation du temps
    function countdown() {
        seconds--;
        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }
        $("#timer").html(minutes + "m " + seconds + "s");
        if (minutes <= 0 && seconds <= 0) {
            clearInterval(x);
            alert("This is the end !")
        }
    }
 //Fonction Pause
    $("#pausebutton").click(function () {
        clearInterval(x);
        x = 0;
    });
    $("#resetbutton").click(function () {
        clearInterval(x);
        minutes = 25;
        seconds = 0;
        $("#timer").html(minutes + "m " + seconds + "s");
    });
});
