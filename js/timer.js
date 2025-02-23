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
  
  function tick()
  {
    function e(rIn)
    {
      function d()
      {
        rIn();
      }
        
      setTimeout(d, 1000);
    }
      
    return new Promise(e);
  }
  
  timer.innerHTML = 60;
  
  for(var n=t; n>0; n--)
  {
    timer.innerHTML = n;
    await tick();
  }
  timer.innerHTML = 0;
}

function timer(tIn)
{
  var t = Number(tIn);
  countDown(t);
}