const token="andDcmxuUFFOWW4xeVFTU1pCZE5ybVZtYVNWYnZzTU0=";
const domain="aHR0cHM6Ly9hcGkuYmFzZXJvdy5pby9hcGkv";
const t_id="187609";
const s_id="1";

function hit()
{
  function s(r)
  {
    alert(r.count);
  }
  
  $.ajax({
    dataType: "json",
    url:  atob(domain) + "database/rows/table/" + t_id + "/" + s_id + "/",
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
