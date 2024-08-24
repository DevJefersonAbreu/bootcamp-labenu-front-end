// Função para adicionar um novo item ao container
function adicionaItem(event) {
  // Cria um novo elemento 'article'
  const novoItem = document.createElement("article");

  // Adiciona a classe 'item' para estilização
  novoItem.classList.add("item");

  // Define o conteúdo de texto do novo item
  novoItem.textContent = "Novo Item";

  // Adiciona o evento de clique para remover o item
  novoItem.onclick = removeItem;

  // Adiciona o novo item ao container
  const container = document.getElementById("container");
  container.appendChild(novoItem);
}

// Função para remover o item clicado
function removeItem(event) {
  // Remove o item clicado
  event.target.remove();
}
