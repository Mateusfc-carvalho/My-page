export function initLazyLoading() {
    const lazyElements = document.querySelectorAll('.lazy-load');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
  
          if (entry.target.tagName.toLowerCase() === 'img' && entry.target.dataset.src) {
            entry.target.src = entry.target.dataset.src;
          }
  
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    lazyElements.forEach(element => observer.observe(element));
  }
  