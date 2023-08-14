const URL = "http://stackoverflow.com/feeds/user/7305052"

function feed()
{
  function s(r)
  {
    document.getElementById("counter").innerText = "feed";
  }

  $.ajax({
    dataType: "xml",
    url: URL,
    accepts: { xml:"application/rss+xml" },
    success: s
  });
  
}
