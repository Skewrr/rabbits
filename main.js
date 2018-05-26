var rabbits = 0;
var rabbitbreed = 1;
var rps = 0;
var interval = 1000;

function updateDisplay() {
	document.getElementById("rabbits").innerHTML = Math.round(rabbits * 100) / 100 + " Rabbits";
	document.getElementById("rps").innerHTML = Math.round(rps * 100) / 100 + " Rabbits per second"
	
}

function breed() {
	rabbits += rabbitbreed;
	updateDisplay();
}

window.setInterval(function() {
	rabbits += rps;

	updateDisplay();
}, interval);
