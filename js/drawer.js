var isOpen = false;
var dTime = 400;

function navDrawerOpen()
{
  if(isOpen === false)
  {
    $("#nav-drawer").animate({ "left":"0px" }, dTime, function() {
      $("#nav-drawer").attr("class", "nav-drawer-open");
    });
    $("#nav-drawer-shim").attr("class", "nav-drawer-shim-open");
    $("#nav-drawer-shim").addClass("lock-scroll");
    isOpen = true;
  }
}

function navDrawerClose()
{
  if(isOpen === true)
  {
    $("#nav-drawer").animate({ "left":"-332px" }, dTime, function() {
      $("#nav-drawer").attr("class", "nav-drawer-close");
    });
    $("#nav-drawer-shim").attr("class", "nav-drawer-shim-close");
    $("#nav-drawer-shim").removeClass("lock-scroll");
    isOpen = false;
  }
}

function drawer()
{
  $("#header-menu").click(navDrawerOpen); // change to nav-drawer-button
  $("#nav-drawer-shim").click(navDrawerClose);
}
