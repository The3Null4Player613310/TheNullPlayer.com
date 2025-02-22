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
      }
        
      setTimeout(d, 1000);
    }
      
    return new Promise(e);
  }
  
  for(var t=tIn; t>0; t--)
  {
    timer.innerHTML = t;
    await tick(t);
  }
  timer.innerHTML = 0;
}

function timer(countIn)
{
  var t = Number(countIn);
  countDown(t);
}