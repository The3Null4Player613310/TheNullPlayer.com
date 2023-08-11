const token="andDcmxuUFFOWW4xeVFTU1pCZE5ybVZtYVNWYnZzTU0=";
const domain="aHR0cHM6Ly9hcGkuYmFzZXJvdy5pby9hcGkv";
const t_id="187609";
const s_id="1";

function hit()
{
  function s(r)
  {
    var c = Number(r.count)+1;

    document.getElementById("counter").innerText = c;
    
    function u()
    {
      
    };

    var d = {"count": ""+c, "website": r.website};

    $.ajax({
      type: "PATCH",
      datatype: "json",
      url: atob(domain) + "database/rows/table/" + t_id + "/" + s_id + "/?user_field_names=true",
      headers: { "authorization":"Token " + atob(token),
                 "content-type":"application/json" },
      data: JSON.stringify(d),
      success: u
    });
  }
  
  $.ajax({
    dataType: "json",
    url:  atob(domain) + "database/rows/table/" + t_id + "/" + s_id + "/",
    headers: { "authorization":"Token " + atob(token) },
    data: { "user_field_names":"true" },
    success: s
  });
}

function counter()
{
  hit();
}
//document.body.addEventListener("load", fetchCount);
