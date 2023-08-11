const token="andDcmxuUFFOWW4xeVFTU1pCZE5ybVZtYVNWYnZzTU0=";
const domain="https://api.baserow.io/api/";
const t_id="187609";
const s_id="1";

alert(btoa(domain));

function hit()
{
  function s(r)
  {
    alert(r);
  }
  
  $.ajax({
    dataType: "json",
    url:  domain + "database/rows/table" + t_id + "/" + s_id + "/",
    headers: { authorization:"Token " + atob(token) },
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
