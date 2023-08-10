const token="jwCrlnPQNYn1yQSSZBdNrmVmaSVbvsMM";

function hit()
{
  function u()
  {
    
  }
  
  const query = new XMLHttpRequest();
  query.addEventListener("load", u);
  query.setRequestHeader("Authorization", token)
  query.open("GET", "https://api.baserow.io");
  query.send();
}

function counter()
{
  document.getElementById("counter").innerText = "314";
}

//hit();
//document.body.addEventListener("load", fetchCount);
