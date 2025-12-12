function mostrarCuriosidade(id) {
  
  // pega a caixa de curiosidade pelo id
  const box = document.getElementById(id);

  // se já tiver 'ativo', remove; se não tiver, adiciona
  box.classList.toggle('ativo');
}