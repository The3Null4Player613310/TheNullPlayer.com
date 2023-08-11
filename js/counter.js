const token="jwCrlnPQNYn1yQSSZBdNrmVmaSVbvsMM";

function hit()
{
  function s(r)
  {
    alert(r);
  }
  
  $.ajax({
    dataType: "json",
    url: url,
    headers: { Authentication:token }
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
