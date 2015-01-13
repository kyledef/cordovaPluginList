(function(){
    document.addEventListener("deviceready", initialize);

    function initialize(){
        var statusEl = document.getElementById("device_status");
        statusEl.innerHTML = "Device Ready";
        statusEl.className = "ready blink";
        document.getElementById('barometerBtn').addEventListener('click', getBarometer);
    }
}());

    