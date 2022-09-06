function tarkasta()
{
  var enimi = document.getElementById('ekanimi').value;
  var tnimi = document.getElementById('tokanimi').value;

  fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname="+enimi+"&sname="+tnimi+"", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
  		"x-rapidapi-key": "bb537d4a34msh68b81f641c1ae69p18facajsn5125e7ebd9db"
  	}
  })
  .then(response => response.json()).then(
    data => {
      jono = "Ensimmäinen nimi: " + data.fname;
      jono += " ja toinen nimi: " + data.sname;
      jono += "<br/>Yhteensopivuusprosentti:" + data.percentage;
      jono += "<br/>Ja lopputulos: " + data.result;
      document.getElementById('vastaus').innerHTML = jono;
    });
}
