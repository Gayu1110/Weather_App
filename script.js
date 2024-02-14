async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=794c41d99917c2d50c6d738627e5d836`
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)
}


function fetchCity() {
	let cityName = document.getElementById("city_name");
	if(cityName===""){
		alert("Enter a city name");
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}