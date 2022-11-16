function saatila()
{
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': '527371f994msh57563f768dd80f6p135d33jsn69c07817117b',
  		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  	}
  };
  var muuttuja = document.getElementById('kaupunki').value;
  fetch('https://open-weather13.p.rapidapi.com/city/' + muuttuja, options)
  	.then(response => response.json())
  	.then(data => {
      console.log(data);
      document.getElementById('vastaus').innerHTML = "Lämpötila (C): " + Math.round((data.main.temp-32)*5/9,2)
      + "<br>Säätila: " + data.weather[0].description
      + "<br>Tuulen nopeus: " + data.wind.speed;
    })
  	.catch(err => console.error(err));
}
