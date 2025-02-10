/*
################################################################
#TheNullPlayer: timer.js
#Copyright © 2025 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

async function countDown(tIn)
{
  var t = Number(tIn);
  var timer = document.getElementById('timer');
  
  function d(tIn)
  {
    var t = Number(tIn)-1;
    function s(cbIn)
    {
      function td()
      {
        cbIn(t);
      }
        
      setTimeout(td, 1000);
    }
      
    return new Promise(s);
  }
  
  while(t != 0)
  {
    timer.innerHTML = t;
    t = Number(await d(t));
  }
}

function timer(countIn)
{
  var t = Number(countIn);
  countDown(t);
}