function testi()
{
  for(i = 1; i <= 100; i++)
  {
    if(i%15 == 0)
    {
      console.log('Hik-up');
    }
    else if(i%5 == 0)
    {
      console.log('up');
    }
    else if(i%3 == 0)
    {
      console.log('Hik');
    }
    else{
      console.log(i);
    }
  }
}
