document.getElementById('stb').style.background = bannerColour
document.getElementById('stb').style.opacity = bannerOpacity
if (size==10){
    document.getElementById('iconp').style.maxWidth = "10%"
    document.getElementById('iconp').style.maxHeight = "10%"
    document.getElementById('iconb').style.maxWidth = "15%"
    document.getElementById('iconb').style.maxHeight = "15%"
    document.getElementById('devicename').style.fontSize = "large"
    document.getElementById('battery').style.fontSize = "large"
}    
if (size==5){
    document.getElementById('iconp').style.maxWidth = "5%"
    document.getElementById('iconp').style.maxHeight = "5%"
    document.getElementById('iconb').style.maxWidth = "10%"
    document.getElementById('iconb').style.maxHeight = "10%"
    document.getElementById('devicename').style.fontSize = "medium"
    document.getElementById('battery').style.fontSize = "medium"
}        
if (size==2){
    document.getElementById('iconp').style.maxWidth = "3%"
    document.getElementById('iconp').style.maxHeight = "3%"
    document.getElementById('iconb').style.maxWidth = "5%"
    document.getElementById('iconb').style.maxHeight = "5%"
    document.getElementById('devicename').style.fontSize = "small"
    document.getElementById('battery').style.fontSize = "small"
}          
