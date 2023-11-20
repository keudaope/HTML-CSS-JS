
async function getData() {
    try {
        const response = await fetch('./JSdb.json');
        const result = await response.json();
        console.log(result);
        for (kysymys in result) {
            document.getElementById("vastaus").innerHTML += "<div class = kortti><p>" + result[kysymys].koodi + "<br/><br/><u>Mitä tulostuu?</u>" +
                "<br/><input type='radio' name='k" + kysymys + "'>" + result[kysymys].A +
                "<br/><input type='radio' name='k" + kysymys + "'>" + result[kysymys].B +
                "<br/><input type='radio' name='k" + kysymys + "'>" + result[kysymys].C +
                "<br/><input type='radio' name='k" + kysymys + "'>" + result[kysymys].D + "<br/></p></div>";
        }

    } catch (error) {
        console.error(error);
    }

    // fetch('./JSdb.json')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json[0].koodi));
    // document.getElementById('vastaus').innerHTML += json[0].koodi;
}

getData();