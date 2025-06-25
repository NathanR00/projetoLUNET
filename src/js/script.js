// Destaca a aba ativa com base no nome da página
let caminho = window.location.pathname;

if (caminho.includes("lentes.html")) {
  document.getElementById("menu-lentes").classList.add("ativo");
} else if (caminho.includes("cases.html")) {
  document.getElementById("menu-cases").classList.add("ativo");
} else {
  document.getElementById("menu-oculos").classList.add("ativo");
}

// Mostrar alerta ao clicar em qualquer botão "Comprar"
let botoesComprar = document.querySelectorAll(".btn-comprar");

botoesComprar.forEach(function (botao) {
  botao.addEventListener("click", function () {
    alert("🛒 O produto foi adicionado ao carrinho!");
  });
});
// Preencher o ano atual automaticamente no rodapé
let anoAtual = new Date().getFullYear();
document.getElementById("ano").textContent = anoAtual;