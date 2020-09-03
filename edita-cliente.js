const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalhaCliente(id).then( dados => {

    inputCPF.value = dados[0].cpf;
    inputNome.value = dados[0].nome;
});

const formEdicao = document.querySelector('[data-form]');

formEdicao.addEventListener('submit', event => {
    event.preventDefault();

    if(validaCPF(inputCPF.value)){
        
        editaClient(id, inputCPF.value, inputNome.value);
        window.location.href = 'clientes.html';
    }else{

        alert('CPF inválido');
    }

    
   
})