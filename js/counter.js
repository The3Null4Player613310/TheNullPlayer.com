const token="andDcmxuUFFOWW4xeVFTU1pCZE5ybVZtYVNWYnZzTU0=";
const domain="aHR0cHM6Ly9hcGkuYmFzZXJvdy5pby9hcGkv";
const id = 1;


function hit()
{
  function s(r)
  {
    alert(r);
  }
  
  $.ajax({
    dataType: "json",
    url: atob(domain) + "database/rows/table/187609/" + id + "/",
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
