var isOpen = false;

function drawer()
{
}

function open()
{
  if(isOpen === false)
  {
    $("#nav-drawer").attr("class", "nav-drawer-open");
    $("#nav-drawer-shim").attr("class", "nav-drawer-shim-open");
    isOpen = true;
  }
}

function close()
{
  if(isOpen === true)
  {
    $("#nav-drawer").attr("class", "nav-drawer-close");
    $("#nav-drawer-shim").attr("class", "nav-drawer-shim-close");
    isOpen = false;
  }
}
