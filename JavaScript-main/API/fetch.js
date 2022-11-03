function uusiKuva()
{
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('kuva').src = data.message;
    document.getElementById('kuva').style.width = '400px';
  } );
}
function vitsi()
{
  fetch("https://official-joke-api.appspot.com/random_joke")
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    document.getElementById('vitsi').innerHTML = data.setup + "<br>" + data.punchline;
  } );
}
function tietoa()
{
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0]);
    var spaiva = new Date((data.results[0].dob.date).slice(0,10));
    var paiva = spaiva.getDate();
    var kk = spaiva.getMonth();
    var vuosi = spaiva.getYear();
    document.getElementById('tietoa').innerHTML = "<b>Nimi: </b>" + data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last
     + "<br><b>Osoite: </b>" + data.results[0].location.street.number + " " + data.results[0].location.street.name
     + "<br>" + data.results[0].location.city + " " + data.results[0].location.state
     + "<br>" + data.results[0].location.postcode + " " + data.results[0].location.country
     + "<br><b>Puhelin: </b>" + data.results[0].phone
     + "<br><b>Maa: </b>" + data.results[0].location.country
     + "<br><b>Käyttäjätunnus + salasana: </b>" + data.results[0].login.username + " " + data.results[0].login.password
     + "<br><b>Syntymäaika: </b>" + paiva + "." + kk + "." + vuosi
     + "<br><b>Sähköposti: </b>" + data.results[0].email;
     document.getElementById('kuva2').src = data.results[0].picture.large;
     document.getElementById('kuva2').style.width = '400px';
  } );
}
function chuckNorris()
{
  fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
    .then(data => {
      document.getElementById('chuck').innerHTML = data.created_at + "<br>" + data.value + "<br>" + data.updated_at;
      console.log(data);
    })
}
function saa()
{
  fetch("https://data.rijksmuseum.nl/object-metadata/api/")
  .then(response => response.json())
    .then(data => {
      //document.getElementById('chuck').innerHTML = data.created_at + "<br>" + data.value + "<br>" + data.updated_at;
      console.log(data);
    })
}
function db()
{
  fetch("http://127.0.0.1:3000/JavaScript-main/API/db.json")
  .then(response => response.json())
    .then(data => {
      document.getElementById('db').innerHTML = data.dogs[2].breed + "<br>" + data.dogs[2].name;
      console.log(data);
    })
}
function kissaTieto()
{
  fetch("https://catfact.ninja/fact")
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    document.getElementById('kissa').innerHTML = data.fact;
      } );
}
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
