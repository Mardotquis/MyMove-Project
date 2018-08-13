// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the topNav
var topNav = document.querySelector(".hero__nav");

// Get the offset position of the navbar
var sticky = topNav.offsetTop;
var heroAfter = document.querySelector(".hero__container");

// Add the sticky class to the topNav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    topNav.classList.add("sticky");
    document.body.style.paddingTop = topNav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    topNav.classList.remove("sticky");
  }
}
