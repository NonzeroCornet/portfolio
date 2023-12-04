if (window.innerWidth <= 800 || window.innerHeight <= 600) {
  document.getElementById("in").innerHTML = ".";
} else {
  document.getElementById("in").innerHTML = " in:";
}

window.onresize = function() {
  if (window.innerWidth <= 800 || window.innerHeight <= 600) {
    document.getElementById("in").innerHTML = ".";
  } else {
    document.getElementById("in").innerHTML = " in:";
  }
};