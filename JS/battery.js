api.resources.observeData(function (newData) {
    var isCharging = newData.battery.state;  
    document.getElementById('deviceName').innerHTML = newData.deviceName;

    if (isCharging==1){
        document.getElementById('battery').innerHTML = newData.battery.percentage+"%";
    } else{
        var ci = document.createElement("i");
        ci.className = "fas fa-bolt";
        document.getElementById("battery").innerHTML = newData.battery.percentage+"%";
        document.getElementById("battery").appendChild(ci)
    }
});