(function(){
	//https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md

	document.addEventListener("deviceready", initialize);

	function initialize(){
		document.getElementById('accelerometerBtn').addEventListener('click', getAccelerometer);
	}

	function getAccelerometer(){
        console.log("Accessing Accelerometer Coordinates");

        if (!navigator.accelerometer){
        	alert("Accelerometer plugin not Available");
        	return;
        }
        var options = {};
        options.frequency = 3000; //ms ie 3 seconds
        var watchId = navigator.accelerometer.watchAcceleration( onAccelerateSuccess, onAccelerateError, options);
    }


    function onAccelerateSuccess(acceleration){
    	console.log(acceleration);
    	var resultElement = document.getElementById("accelerometerValues");

    	var HTMLStr = "<table>";
    	HTMLStr += "<thead><tr><th>Dimension</th><th>Value</th></tr></thead>";
    	HTMLStr += "<tbody>";
    	HTMLStr += "<tr><td>X Axis</td><td>" + acceleration.x + "</td></tr>";
    	HTMLStr += "<tr><td>Y Axis</td><td>" + acceleration.y + "</td></tr>";
    	HTMLStr += "<tr><td>Z Axis</td><td>" + acceleration.z + "</td></tr>";
    	HTMLStr += "<tr><td>Timestamp</td><td>" + acceleration.timestamp + "</td></tr>";
    	HTMLStr += "</tbody></table>";

    	resultElement.innerHTML = HTMLStr;
    }

    function onAccelerateError(message){
    	console.log("Unable to read the acceleration: " + message);
    }


}());