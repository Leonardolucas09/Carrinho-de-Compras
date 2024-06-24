let valorGeral = 0;
limpar();

function adicionar() {
    
    let produto = document.getElementById("produto").value;
    let produtoNome = produto.split("-")[0];
    let produtoValor = produto.split("R$")[1];
    let produtoQuantidade = document.getElementById("quantidade").value;

    if (produtoQuantidade == 0)
        alert(`Adicione a quantidade do produto: ${produtoNome}`);
    
    else{
        let produtoPrecos = produtoQuantidade * produtoValor;
        
        let carrinho = document.getElementById("lista-produtos");
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${produtoQuantidade}x</span> ${produtoNome} <span class="texto-azul">R$${produtoPrecos}</span> </section>`;
        
        valorGeral = valorGeral + produtoPrecos;
        
        let campoTotal = document.getElementById("valor-total");
        campoTotal.textContent =  `R$ ${valorGeral}`
        
        document.getElementById("quantidade").value = 0;
    }
}

function limpar() {
    valorGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$ 0";
}