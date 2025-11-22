const counters = document.querySelectorAll('.highlight-number');

/**
 * Anima a contagem de um elemento do 0 até o valor definido em 'data-target'.
 * @param {HTMLElement} el O elemento HTML a ser animado.
 */
const animateCounter = (el) => {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1500; // Duração da animação em milissegundos
  // const start = 0; // Variável 'start' não é usada
  let startTime = null;

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    
    const progress = timestamp - startTime;
    
    // Calcula o fator de progresso (de 0 a 1)
    const value = Math.min(progress / duration, 1);
    
    // Calcula o valor atual e arredonda para baixo
    const currentValue = Math.floor(value * target);

    el.innerText = currentValue;

    // Continua a animação se o tempo não tiver acabado
    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      // Garante que o valor final seja o target exato
      el.innerText = target; 
    }
  };
  window.requestAnimationFrame(step);
};

// Cria um observador
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Inicia a animação quando o elemento for visível
      animateCounter(entry.target);
      // Para de observar o elemento após a animação
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.8 }); // 80% do elemento precisa estar visível

// Observa todos os elementos de contagem
counters.forEach(counter => {
  observer.observe(counter);
});