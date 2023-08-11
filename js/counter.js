const token="andDcmxuUFFOWW4xeVFTU1pCZE5ybVZtYVNWYnZzTU0=";
const domain="https://api.baserow.io/";
const t_id="187609"
const s_id="1";

alert(btoa(domain));

function hit()
{
  function s(r)
  {
    alert(r);
  }

  // atob(domain) "database/rows/table/187609/" + id + "/",
  
  $.ajax({
    dataType: "json",
    url:  domain,
    headers: { Authentication:atob(token) },
    //data: data,
    success: s
  });
}

function counter()
{
  document.getElementById("counter").innerText = "314";
}

hit();
//document.body.addEventListener("load", fetchCount);
