const token="jwCrlnPQNYn1yQSSZBdNrmVmaSVbvsMM";

function fetchCount()
{
  getElementById("counter").innerText = "314";
}

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

hit();
object.addEventListener("load", fetchCount);
