(function(){
	//http://plugins.cordova.io/#/package/org.apache.cordova.battery-status

	//Adding this plugin requires the following command: (has working implementation for browser)
	// cordova plugin add https://github.com/MSOpenTech/cordova-plugin-battery-status.git#CB-7953

    document.addEventListener("deviceready", initialize);

    function initialize(){
        document.getElementById('batteryBtn').addEventListener('click', getBattery);
    }

    function getBattery(){
    	// alert("Attempting to Read Battery Status");
    	//Register events
    	window.addEventListener("batterycritical", onBatteryCritical, false );
    	window.addEventListener("batterystatus", onBatteryStatus, false);
    	window.addEventListener("batterylow", onBatteryLow, false);
    }

    function onBatteryCritical(info){
    	var resultEl = document.getElementById("batteryValues");
    	var HTMLStr = "Critical: "  + info.level;
    	resultEl.innerHTML = HTMLStr;
    }

    function onBatteryStatus(info){
    	var resultEl = document.getElementById("batteryValues");
    	var HTMLStr = "Level: " + info.level + " isPlugged: " + info.isPlugged;
    	resultEl.innerHTML = HTMLStr;
    }

    function onBatteryLow(info){
    	var resultEl = document.getElementById("batteryValues");
    	var HTMLStr = "Battery Level Low " + info.level;
    	resultEl.innerHTML = HTMLStr;
    }

}());