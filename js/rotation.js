function rotation_lock()
{
  screen.orientation.lock("portrait");
  alert("locked");
}

function rotation_check()
{
  const UA = navigator.userAgent;
  return ( UA.includes("iPhone") || UA.includes("iPod") || UA.includes("IEMobile") || UA.includes("Android") || UA.includes("Windows Phone") );
}

if(rotation_check())
{
  rotation_lock();
}
