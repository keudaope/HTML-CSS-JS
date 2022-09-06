function testi()
{
	for(var i = 100; i < 1000; i++){
    x = i.toString().split('');
    //console.log(i + " " + x[0]+x[1]+x[2])
    if(Math.pow(x[0],3)+Math.pow(x[1],3)+Math.pow(x[2],3) == i)
    {
      console.log("TÄMÄ: " + i);
    }
  }
}
