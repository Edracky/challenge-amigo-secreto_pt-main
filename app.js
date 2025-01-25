
let listaDeAmigos = [];


function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo) {
        listaDeAmigos.push(nomeAmigo);
        atualizarLista();
        document.getElementById("amigo").value = ""; 
    } else {
        alert("Por favor, digite um nome.");
    }
}


function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    listaDeAmigos.forEach(function(amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}


function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio.");
        return;
    }

    embaralhar(listaDeAmigos); 

    let amigoSorteado = listaDeAmigos.shift(); 
    let item = document.createElement("li");
    item.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(item);
}


function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}
