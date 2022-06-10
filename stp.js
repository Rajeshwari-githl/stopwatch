window.onload=function()  {
	var interval;
	var msplus= 00;
	var secplus= 00;
	var sec = 
	document.getElementById("ms");
	var ms = 
	document.getElementById("sec");
	var start = 
	document.getElementById("start-btn");
	var stop = 
	document.getElementById("stop-btn");
	var reset = 
	document.getElementById("reset-btn");

	start.onclick = function() {
		clearInterval(interval);
		interval = setInterval(startstopwatch, 10);
	}
	stop.onclick = function() {
		clearInterval(interval);

	}
	reset.onclick = function() {
		clearInterval(interval);
		msplus = "00";
		secplus = "00";
		ms.innerHTML=msplus;
		sec.innerHTML=secplus;

		function startstopwatch() {
			secplus++;
			if (secplus< 9){
				sec.innerHTML="0".secplus;
			}
			if (secplus > 9){
				sec.innerHTML=secplus;
			}
			if (secplus> 99){
				console.log(mspus);
				msplus++;
				ms.innerHTML="0"+msplus;
				secplus=00;
				sec.innerHTML = "0"+0;
			}
			if (msplus> 9) {
				ms.innerHTML=msplus;
			}
		}
	}
}