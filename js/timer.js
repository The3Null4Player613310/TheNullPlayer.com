async function countDown()
{
  
  function d(tIn)
  {
    function s(cbIn)
    {
      function td()
      {
        cbIn(Number(tIn)-1);
      }
        
      setTimeout(td, 1000);
    }
      
    return new Promise(s);
  }


  var t = Number("15");
  var timer = document.getElementById('timer');
  
  while(t != 0)
  {
    t = Number(await d(t));
    timer.innerHTML = t;
  }
}

function timer()
{
  countDown();
}