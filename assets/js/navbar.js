window.onscroll = function() {
  myFunction();
};
var header = document.getElementById("navbar");
var sticky = header.offsetTop + 300;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
