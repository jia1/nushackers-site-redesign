var mn = $(".main-nav");
var bl = $(".brand");
var mns = "main-nav-scrolled";
var hdr = $('header').height();

$(window).scroll(function() {
  if ($(this).scrollTop() > hdr) {
    mn.addClass(mns);
    bl.css("visibility" , "visible");
  } else {
    mn.removeClass(mns);
    bl.css("visibility" , "hidden");
  }
});