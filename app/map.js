// assim com o forEach, aplica uma função para cada elemento do array passado por parametro, mas retorna um novo array com os valores tratados

function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}