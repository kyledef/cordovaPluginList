(function(){
	//https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md

	document.addEventListener("deviceready", initialize);

	function initialize(){
		document.getElementById('GPSBtn').addEventListener('click', takeGPS);
	}

	function takeGPS(){
        console.log("Taking GPS Coordinates");

        if (!navigator.geolocation){
        	alert("GPS geolocation plugin not available");
        	return;
        }

        var options = {};
        options.timeout = 5000; // ms ie 5 seconds
        options.enableHighAccuracy = true;
        options.maximumAge = 3000;

        navigator.geolocation.watchPosition(onGPSSuccess, onGPSError, options);

    }

    function onGPSSuccess(position){
    	var resultEl = document.getElementById("gpsValues");

    	console.log(position);

    	var HTMLStr = "<table>";
    	HTMLStr += "<thead><tr><th>Dimension</th><th>Value</th></tr></thead>";
    	HTMLStr += "<tbody>";
    	HTMLStr += "<tr><td>latitude</td><td>" + position.coords.latitude + "</td></tr>";
    	HTMLStr += "<tr><td>longitude</td><td>" + position.coords.longitude + "</td></tr>";
    	HTMLStr += "<tr><td>altitude</td><td>" + position.coords.altitude + "</td></tr>";
    	HTMLStr += "<tr><td>accuracy</td><td>" + position.coords.accuracy + "</td></tr>";
    	HTMLStr += "</tbody></table>";

    	resultEl.innerHTML = HTMLStr;
    }

    function onGPSError(message){
    	console.log("Unable to access GPS: " + message);
    }
}());