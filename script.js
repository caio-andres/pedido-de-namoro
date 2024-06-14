function mostrarResposta() {
  document.getElementById("resposta").style.display = "block";
  document.getElementById("resposta").innerHTML = "Te amo!";
  document.getElementById("no").style.display = "none";
  document.getElementById("resposta-img").style.display = "block";
  var img = document.getElementById("resposta-img");
  img.src =
    "https://gpsbrasilia.com.br/wp-content/uploads/2023/12/Design-sem-nome-2023-12-12T113049.133.jpg";
  img.height = 300;
}

function mudarPosicao() {
  const buttonNao = document.getElementById("no");
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  buttonNao.style.left = `${randomX}px`;
  buttonNao.style.top = `${randomY}px`;
}
