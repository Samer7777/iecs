// add a custom lazy loading
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img.lazy");
  const lazyLoad = (image) => {
      image.src = image.dataset.src;
      image.classList.remove("lazy");
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              lazyLoad(entry.target);
              observer.unobserve(entry.target);
          }
      });
  });

  lazyImages.forEach(image => {
      observer.observe(image);
  });
});


//fixed navbar

window.onscroll = function() {
  var navbar = document.querySelector('.my_nav');
  if (window.pageYOffset > 41) {  // Scrolls after 50px
      navbar.classList.add('fixed-top');
  } else {
      navbar.classList.remove('fixed-top');
  }
};




