const counters = document.querySelectorAll('.highlight-number');

const animateCounter = (el) => {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1500; 
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    
        const progress = timestamp - startTime;
        const value = Math.min(progress / duration, 1);
        const currentValue = Math.floor(value * target);

    el.innerText = currentValue;

    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      el.innerText = target; 
    }
  };
  window.requestAnimationFrame(step);
};


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.8 }); 

counters.forEach(counter => {
  observer.observe(counter);
});