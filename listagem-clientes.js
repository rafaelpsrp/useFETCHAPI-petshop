
const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeClientes = (cpf, nome, id) => {
    
    const linha = document.createElement('tr');
    
    const conteudoLinha = ` 
        
        <td>${cpf}</td>

        <td>${nome}</td>
        
        <button onclick="removeCliente(${id})" type="button" 
                class="btn btn-danger">Excluir
        </button>
        
        <a href="edita-clientes.html?id=${id}">
            <button type="button" class="btn btn-info">Editar</button>
        </a>
    `;
    
    linha.innerHTML = conteudoLinha;
    
    return linha;
    
}
const removeCliente = id => {
            
    if(confirm('Deseja realmente excluir esse cliente ?')){

        deletaCliente(id);
        document.location.reload();
    }
}

listarClientes().then( exibe => {
   
    exibe.forEach( indice => {
    
        corpoTabela.appendChild(exibeClientes(indice.cpf, indice.nome, indice.id));   
    })
}
);