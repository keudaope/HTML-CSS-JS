function store(){ //stores items in the localStorage
    var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;
    var key = document.getElementById('key').value;

    const car = {
        brand: brand,
        price: price,
    }

    window.localStorage.setItem(key,JSON.stringify(car));
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
    /*var key = document.getElementById('retrieveKey').value; //gets key from user
    console.log("retrive records");
    var records = window.localStorage.getItem(key); //searches for the key in localStorage */
    const poistettava = document.getElementById('retrieve');
    if(poistettava.hasChildNodes())
    {
      while(poistettava.hasChildNodes())
      {
        poistettava.removeChild(poistettava.firstChild);
      }
    }
    for(var i=0; i < localStorage.length; i++)
    {
      paragraph = document.createElement("p");

      // Ylemmän tilalle alle oleva
      var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
      // Luodaan kappale, joka myöhemmin lisätään sivulle
      var infor = document.createTextNode(data.brand);
      infor2 = document.createTextNode(data.price);
      // Luodaan otsikkotekstit ja rivinvaihto
      var teksti = document.createTextNode("Malli: ");
      var teksti2 = document.createTextNode("Hinta: ");
      var rivinvaihto = document.createElement("br");
      // Lisätään ensimmäinen otsikkoteksti
      paragraph.appendChild(teksti);
      // Lisätään malli JSONista (kts. rivi 24)
      paragraph.appendChild(infor);
      // Lisätään rivinvaihto
      paragraph.appendChild(rivinvaihto);
      // Lisätään toinen otsikkoteksti
      paragraph.appendChild(teksti2);
      // Lisätään hinta JSONista (kts. rivi 25)
      paragraph.appendChild(infor2);
      // Haetaan paikka HTML:stä (id:n perusteella), johon koko höskä lisätään
      var element = document.getElementById("retrieve");
      // Lisätään koko höskä (paragraph) edelliseen kohtaan
      element.appendChild(paragraph);
    }

}

function removeItem(){ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(key) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}
