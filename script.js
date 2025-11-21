// Exemplo simples: ao clicar no card, você pode abrir uma página específica
document.querySelectorAll(".btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        window.location.href = `tela-${index + 1}.html`;
    });
});
