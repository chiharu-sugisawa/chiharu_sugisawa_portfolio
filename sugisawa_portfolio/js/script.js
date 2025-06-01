$(function () {
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("open");
    $(".header_nav_sp").fadeToggle();
  });
});
