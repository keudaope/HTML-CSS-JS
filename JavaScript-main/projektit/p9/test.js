async function testi() {
    const url = 'https://nameday.abalin.net/api/V1/today';
    const url2 = 'https://nameday.abalin.net/api/V1/tomorrow';
    const url3 = 'https://nameday.abalin.net/api/V1/yesterday';

    try {
        const response = await fetch(url);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);

        const result = await response.json();
        const result2 = await response2.json();
        const result3 = await response3.json();

        document.getElementById("vastaus").innerHTML = result.day + "." + result.month + ".2023 " + result.nameday.fi;
        document.getElementById("v2").innerHTML = result2.day + "." + result2.month + ".2023 " + result2.nameday.fi;
        document.getElementById("v3").innerHTML = result3.day + "." + result3.month + ".2023 " + result3.nameday.fi;
    } catch (error) {
        console.error(error);
    }
}
function testi2() {
    // omat jutut
    let pvm = document.getElementById("paiva");
    pvm = pvm.value;
    let kk = pvm.substring(5, 7);
    let paiva = pvm.substring(8, 10);
    console.log(paiva);
    // omat jutut loppuu

    const url = new URL(
        "https://nameday.abalin.net/api/V1/getdate?day=" + paiva + "&month=" + kk + "&country=fi"
    );

    const params = {
        "day": paiva,
        "month": kk,
        "country": "fi",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log(data);
            // Display the nameday information on the webpage
            document.getElementById("v4").innerHTML = "Nimipäiväänsä viettää: " + data.day + "." + data.month + " " + data.nameday.fi;
        })
        .catch(error => console.error('Error:', error));
}
function testi3() {
    nimi = document.getElementById("nimi").value;
    const url = new URL(
        "https://nameday.abalin.net/api/V1/getname"
    );

    const params = {
        "name": nimi,
        "country": "fi",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log(data[0][0]);
            // Display the nameday information on the webpage
            document.getElementById("v5").innerHTML = data["0"]["0"].day + "." + data["0"]["0"].month + ": " + data["0"]["0"].name;
        });
}


