// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("vis");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

reveals.forEach(el => io.observe(el));
