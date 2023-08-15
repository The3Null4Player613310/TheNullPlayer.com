var isOpen = false;

function drawer()
{
}

function open()
{
  $(nav-drawer).setAttribute("class", "nav-drawer-open");
  $(nav-shim).setAttribute("class", "nav-drawer-shim-open");
}

function close()
{
  $(nav-drawer).setAttribute("class", "nav-drawer-close");
  $(nav-drawer).setAttribute("class", "nav-drawer-shim-close");
}
