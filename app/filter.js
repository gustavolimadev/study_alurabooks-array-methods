/* Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida */

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponibilidade() : filtrarCategoria(categoria);
    exibirLivrosDOM(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValorTotal(valorTotal)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(valorTotal) {
    sectionValorTotal.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}