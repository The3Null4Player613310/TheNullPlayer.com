const token="andDcmxuUFFOWW4xeVFTU1pCZE5ybVZtYVNWYnZzTU0=";
const domain="https://api.baserow.io/api/"
alert(btoa(domain));
alert(atob(token));
function hit()
{
  function s(r)
  {
    alert(r);
  }
  
  $.ajax({
    dataType: "json",
    url: url,
    headers: { Authentication:atob(token) },
    data: data,
    success: s
  });
}

function counter()
{
  document.getElementById("counter").innerText = "314";
}

hit();
//document.body.addEventListener("load", fetchCount);
