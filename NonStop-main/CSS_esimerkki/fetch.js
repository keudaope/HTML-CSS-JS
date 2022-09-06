function kissaTieto()
{
  fetch("https://cat-fact.herokuapp.com/facts")
  .then(response => response.json())
  .then(data => {
    var pituus = data.length;
    var satunnainen = Math.floor(Math.random()*pituus);
    //console.log(data[0].text);
    document.getElementById('kissa').innerHTML = data[satunnainen].text;
      } );
}
kissaTieto();
