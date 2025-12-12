document.querySelectorAll(".btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        window.location.href = `tela-${index + 1}.html`;
    });
});

// CARROSSEL

const slides = document.querySelectorAll('.slide');
const bolinhas = document.querySelectorAll('.bolinha');

let indiceAtual = 0;

// Quantidade total de slides
const totalSlides = slides.length;

/*Exibir apenas o slide correspondente e atualiza as bolinhas*/
function mostrarSlide(indice) {
    if (indice < 0) indice = totalSlides - 1;
    if (indice >= totalSlides) indice = 0;

    // Atualiza a variável global indiceAtual
    indiceAtual = indice;

    // Remove a classe 'slide-ativa' de todos os slides (esconde todos)
    slides.forEach(function (slide) {
        slide.classList.remove('slide-ativa');
    });

    // Remove a classe 'bolinha-ativa' de todas as bolinhas
    bolinhas.forEach(function (bolinha) {
        bolinha.classList.remove('bolinha-ativa');
    });

    slides[indiceAtual].classList.add('slide-ativa');
    bolinhas[indiceAtual].classList.add('bolinha-ativa');
    }

       function irParaSlideAnterior() {
      mostrarSlide(indiceAtual - 1);
    }

    function irParaProximoSlide() {
      mostrarSlide(indiceAtual + 1);
    }

    // Para cada bolinha, adiciona um evento de clique
    bolinhas.forEach(function (bolinha) {
        bolinha.addEventListener('click', function () {
            // Lê o valor do atributo data-indice da bolinha clicada
            const indiceBolinha = Number(bolinha.getAttribute('data-indice'));
            // Mostra o slide correspondente à bolinha clicada
            mostrarSlide(indiceBolinha);
        });
    });

    // Troca automática de slide a cada 5 segundos (5000 ms)
    setInterval(function () {
      irParaProximoSlide();
    }, 5000);

