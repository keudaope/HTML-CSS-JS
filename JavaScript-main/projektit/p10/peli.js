/* alustetaan käyttäjän ja tietokoneen pisteet 0:ksi */
let kPisteet = 0;
let tPisteet = 0;
const kPisteet_span = document.getElementById("kayttajan_pisteet");
const tPisteet_span = document.getElementById("tietokoneen_pisteet");
const tulosTaulu_header = document.querySelector(".tulostaulu");
const vastaus_article = document.querySelector(".vastaus");
const kividfn = document.getElementById("k");
const saksetdfn = document.getElementById("s");
const paperidfn = document.getElementById("p");

function haeTietsikanValinta() {
    const valinnat = ["k", "p", "s"]; /* Jokin näistä */
    /* Otetaan satunnaisesti jokin kolmesta */
    const randomNumber = Math.floor(Math.random() * 3);
    return valinnat[randomNumber];
}

function muunnaKirjaimetSanoiksi(kirjain) {
    if (kirjain === "k") return "Kivi";
    if (kirjain === "p") return "Paperi";
    else return "Sakset";
}
function voitto(kayttajanValinta, tietsikanValinta) {
    /* Käyttäjän pisteitä lisätään */
    kPisteet++;
    /* Pisteet näytetään taulussa */
    kPisteet_span.innerHTML = kPisteet;
    tPisteet_span.innerHTML = tPisteet;
    /* Kirjoitetaan näkyviin myös kilpailun tulos */
    vastaus_article.innerHTML =
        muunnaKirjaimetSanoiksi(kayttajanValinta) +
        " on voimakkaampi kuin " +
        muunnaKirjaimetSanoiksi(tietsikanValinta) +
        ". Sinä voitit!";
    document.getElementById(kayttajanValinta).classList.add("green-glow");
    setTimeout(function () {
        document
            .getElementById(kayttajanValinta)
            .classList.remove("green-glow");
    }, 3000);
}

function tappio(kayttajanValinta, tietsikanValinta) {
    /* Tietokoneen pisteitä lisätään */
    tPisteet++;
    /* Pisteet näytetään taulussa */
    tPisteet_span.innerHTML = tPisteet;
    kPisteet_span.innerHTML = kPisteet;
    /* Kirjoitetaan näkyviin myös kilpailun tulos */
    vastaus_article.innerHTML =
        muunnaKirjaimetSanoiksi(tietsikanValinta) +
        " on voimakkaampi kuin " +
        muunnaKirjaimetSanoiksi(kayttajanValinta) +
        ". Sinä hävisit!";
    document.getElementById(kayttajanValinta).classList.add("red-glow");
    setTimeout(function () {
        document
            .getElementById(kayttajanValinta)
            .classList.remove("red-glow");
    }, 3000);
}

function tasapeli(kayttajanValinta, tietsikanValinta) {
    /* Pisteet näytetään taulussa */
    tPisteet_span.innerHTML = tPisteet;
    kPisteet_span.innerHTML = kPisteet;
    /* Kirjoitetaan näkyviin myös kilpailun tulos */
    document.getElementById(kayttajanValinta).classList.add("gray-glow");
    setTimeout(function () {
        document
            .getElementById(kayttajanValinta)
            .classList.remove("gray-glow");
    }, 3000);

    vastaus_article.innerHTML = "Oi, ei, tuli tasapeli!";
}
function peli(kayttajanValinta) {
    /* Arvotaan tietokoneen valinta */
    const tietsikanValinta = haeTietsikanValinta();
    /* Yhdistetään käyttäjän valinta tietokoneen valintaan */
    /* ja tarkastellaan vaihtoehtoja */
    switch (kayttajanValinta + tietsikanValinta) {
        case "ks": /* Kivi voittaa sakset */
        case "pk": /* Paperi voittaa kiven */
        case "sp" /* Sakset voittaa paperin */:
            voitto(kayttajanValinta, tietsikanValinta);
            break;
        case "sk": /* Sakset häviää kivelle */
        case "kp": /* kivi häviää paperille */
        case "ps" /* paperi häviää saksille */:
            tappio(kayttajanValinta, tietsikanValinta);
            break;
        case "ss": /* Sakset sakset tasapeli */
        case "pp": /* Paperi paperi tasapeli */
        case "kk" /* Kivi kivi tasapeli */:
            tasapeli(kayttajanValinta, tietsikanValinta);
            break;
    }
}
function main() {
    /* Kun käyttäjä napauttaa kiven kuvaa, */
    kividfn.addEventListener("click", function () {
        /* saa peli ts. käyttäjä arvon "k" */
        peli("k");
    });
    /* Kun käyttäjä napauttaa saksien kuvaa, */
    saksetdfn.addEventListener("click", function () {
        /* saa peli ts. käyttäjä arvon "s" */
        peli("s");
    });
    /* Kun käyttäjä napauttaa paperin kuvaa, */
    paperidfn.addEventListener("click", function () {
        /* saa peli ts. käyttäjä arvon "p" */
        peli("p");
    });
}
main();