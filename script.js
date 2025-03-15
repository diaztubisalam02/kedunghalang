document.addEventListener("DOMContentLoaded", function () {
    // Menangani klik pada navigasi untuk smooth scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Mengatur posisi agar tidak terlalu dekat dengan header
            behavior: "smooth"
          });
        }
      });
    });
  
    // Efek animasi fade-in saat artikel muncul dalam tampilan
    const articles = document.querySelectorAll("article");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
  
    articles.forEach(article => {
      observer.observe(article);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footer.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    observer.observe(footer);
  });

  document.querySelector(".footer-iconTop a").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("header").scrollIntoView({ behavior: "smooth" });
  });
  
  