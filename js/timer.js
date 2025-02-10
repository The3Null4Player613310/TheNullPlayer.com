/*
################################################################
#TheNullPlayer: timer.js
#Copyright © 2025 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

async function countDown()
{
  
  function d(tIn)
  {
    var tn = Number(tIn)-1;
    function s(cbIn)
    {
      function td()
      {
        cbIn(tn);
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