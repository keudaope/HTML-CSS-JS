function etsiSanaa(lomake)
{
  let lause = document.getElementById('lause').value;
  let sana = document.getElementById('sana').value;
  sana = "//" + sana + "//";
  //sana = /onni/;
  console.log(sana);
  let result = sana.test(lause);
  if(result)
  {
    document.getElementById('v1').innerHTML = "Sana löytyi lauseesta";
  }
  else {
    document.getElementById('v1').innerHTML = "Sanaa ei löytynyt lauseesta";
  }
  let text = "Hello world!";

// look for "Hello"
let pattern1 = /Hello/g;
let result1 = pattern1.test(text)

// look for "W3Schools"
let pattern2 = /W3Schools/g;
let result2 = pattern2.test(text);

document.getElementById("v1").innerHTML = result1 + "<br>" + result2;
}
