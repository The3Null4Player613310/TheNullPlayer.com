/*
################################################################
#TheNullPlayer: feed.js
#Copyright © 2024 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

const URL = "https://stackoverflow.com/feeds/user/7305052"

function feed()
{

  function a(index, item)
  {
    document.getElementById("feed").innerText = String(index);
  }
  
  function s(r)
  {
    $(r)
      .find(item)
      .each(a(index, item))
  }

  $.ajax({
    dataType: "xml",
    url: URL,
    headers: { crossorigin:"anonymous" },
    accepts: { xml:"application/rss+xml" },
    success: s
  });
  
}
