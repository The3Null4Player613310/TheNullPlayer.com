function d(tIn)
{
    function s(cb)
    {
        function ti()
        {
            cb(Number(tIn)-1);
        }
        
        setTimeout(ti, 1000);
    }
    
    return new Promise(s);
}

async function countDown()
{
  var t = Number("15");
  while(t != 0)
  {
    t = Number(await d(t));
    
  }

}

function timer()
{
  var timer = document.getElementById("timer");
  timer.innerHTML = "0";
}