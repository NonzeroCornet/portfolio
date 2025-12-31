const subtitle = document.querySelector(".hero-subtitle");
const text = subtitle.textContent;
subtitle.textContent = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

setTimeout(typeWriter, 1000);

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.animation = `${
          index % 2 === 0 ? "swingLeft" : "swingRight"
        } 0.8s ease-out forwards, breathe 6s ease-in-out infinite`;
        entry.target.style.opacity = "1";
      }, (index % 3) * 150);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card").forEach((card, index) => {
  observer.observe(card);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
