var meteo = new XMLHttpRequest();
var geoloc = new XMLHttpRequest();
var submit = document.getElementById("validerville");
var city, leve, hLeve, couche, hCouche, vitVent, inputCity;

submit.addEventListener("click", e => meteoVilleChoisie(e,meteo,inputCity,city));

function meteoVilleChoisie(e, meteo,inputCity,city,leve, hLeve, couche, hCouche, vitVent){
	e.preventDefault();
	city = ville(inputCity,city);
	meteo.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=abbc10db133a3d889ab16f8d71f9eb46&units=metric&lang=fr");			
	meteo.onreadystatechange = function() {
		if(meteo.readyState == 4 && meteo.status == 200) {
			donneeMeteo(meteo,city,leve, hLeve, couche, hCouche, vitVent);					
		}
	}
	meteo.send(null);
	suppElement();
}
function ville(inputCity,city){
	inputCity  = document.getElementById("inputVille").value;
	console.log (inputCity);
	city = inputCity;
	return city;
}
function donneeMeteo(meteo,city,leve, hLeve, couche, hCouche, vitVent){
	city = ville(inputCity,city);
	leve = JSON.parse(meteo.responseText).sys.sunrise;
	hLeve = (new Date(leve*1000)).toLocaleTimeString();
	couche = JSON.parse(meteo.responseText).sys.sunset;
	hCouche = (new Date(couche*1000)).toLocaleTimeString();
	vitVent = (JSON.parse(meteo.responseText).wind.speed)*3.6;

	if (JSON.parse(meteo.responseText).weather[0].main == "Clear"){
		document.getElementById("img").setAttribute("src","https://media1.giphy.com/media/VxbvpfaTTo3le/giphy.gif?cid=3640f6095c16ae926c6f41385931a704");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Clouds"){
		document.getElementById("img").setAttribute("src","https://media0.giphy.com/media/26vIfmfSwsxxz9dEk/giphy.gif?cid=3640f6095c16ad774f6134426b27d3df");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Rain"){
		document.getElementById("img").setAttribute("src","https://media2.giphy.com/media/Mgq7EMQUrhcvC/giphy.gif?cid=3640f6095c16ad5434655a7a2e2d2647");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Thunderstorm"){
		document.getElementById("img").setAttribute("src","https://media3.giphy.com/media/8xY1YYpEZ4dws/giphy.gif?cid=3640f6095c16ad366a576a3049fd07dc");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Snow"){
		document.getElementById("img").setAttribute("src","https://media1.giphy.com/media/14uJKhQMZ1wLfO/giphy.gif?cid=3640f6095c16adb87478327a739c05c3");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Fog" ){
		document.getElementById("img").setAttribute("src","https://media0.giphy.com/media/KPtOFhewRGWl2/giphy.gif?cid=3640f6095c17736d346177314565dd10");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Mist"){
		document.getElementById("img").setAttribute("src","https://media0.giphy.com/media/KPtOFhewRGWl2/giphy.gif?cid=3640f6095c17736d346177314565dd10");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Smoke"){
		document.getElementById("img").setAttribute("src","https://media0.giphy.com/media/KPtOFhewRGWl2/giphy.gif?cid=3640f6095c17736d346177314565dd10");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Haze"){
		document.getElementById("img").setAttribute("src","https://media0.giphy.com/media/KPtOFhewRGWl2/giphy.gif?cid=3640f6095c17736d346177314565dd10");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Sand"){
		document.getElementById("img").setAttribute("src","https://media0.giphy.com/media/KPtOFhewRGWl2/giphy.gif?cid=3640f6095c17736d346177314565dd10");
	}
	if (JSON.parse(meteo.responseText).weather[0].main == "Drizzle"){
		document.getElementById("img").setAttribute("src","https://media1.giphy.com/media/xT9GEOg09OuResnZ6g/giphy.gif?cid=3640f6095c16ae04785a44752e9c745d");
	}
	console.log(JSON.parse(meteo.responseText));								 
	document.getElementById("ville").innerHTML = "Météo à "+ city;
	document.getElementById("temperature").innerHTML=Math.round((JSON.parse(meteo.responseText).main.temp))+ "°C ";
	document.getElementById("temps").innerHTML=(JSON.parse(meteo.responseText).weather[0].description);				
	document.getElementById("humid").innerHTML="Humidité : "+(JSON.parse(meteo.responseText).main.humidity)+" %";
	document.getElementById("leve").innerHTML="Heure de levé : "+(hLeve);
	document.getElementById("couche").innerHTML="Heure de couche : " +(hCouche);
	document.getElementById("vent").innerHTML="Vitesse du vent : "+Math.round(vitVent)+" km/h";
	document.getElementById("nuage").innerHTML="Nuage : "+(JSON.parse(meteo.responseText).clouds.all)+" %";
}
function suppElement(){
	document.getElementById("choix").id = "suppElement";
	document.getElementById("contentHidden").id ="content";
	document.getElementById("bodychoix").id = "bodymet";
}



