console.log("hylo");
function cmon(){
var a=document.getElementById("searc").value;
console.log(a);
   
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+a,function(data){
  console.log(data)
  var z = document.getElementsByClassName("icon");
  z[0].style.display="visible";
  var icon="https://openweathermap.org/img/w/"+data.weather[0].icon+".png"
  $(".icon").attr("src",icon);
  var city=data.name;
  $(".city").append(city)
  var temp=data.main.temp;
  var weather=data.weather[0].main
  $(".temp").append(temp+" °C , "+weather)
})
}

function clean(){
  console.log("clicked");
  document.getElementById("searc").value="";
  var x = document.getElementsByClassName("city");
  x[0].innerHTML="";
  var y = document.getElementsByClassName("temp");
  y[0].innerHTML="";
  var z = document.getElementsByClassName("icon");
  z[0].style.display="none";
}


