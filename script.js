var spanLinks = document.querySelector(".about-content").getElementsByTagName("span");
for (let i = 0; i < spanLinks.length; i++) {
  spanLinks[i].addEventListener("click", (event) => {
    document.body.classList.add("shake");
    setTimeout(() => {
      document.body.classList.remove("shake");
    }, 500);
  });
}

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