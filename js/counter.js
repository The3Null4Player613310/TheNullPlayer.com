const token="jwCrlnPQNYn1yQSSZBdNrmVmaSVbvsMM";

function fetchCount()
{
}

function hit()
{
  function u()
  {
    getElementById("counter").innerText = "314";
  }
  
  const query = new XMLHttpRequest();
  query.addEventListener("load", u);
  query.open("GET", "https://api.baserow.io");
  query.send();
}

hit();
