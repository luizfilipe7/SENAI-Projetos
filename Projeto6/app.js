const listaDeEspera = []


function adicionarLista() {
    console.log("add lista")
    let paciente = document.querySelector("#paciente").value //pega o nome na tela
    let ulLista = document.querySelector("#listaEspera") //sai com a lista

    //verifica prenchimento do campo
    if (paciente == ""){
        alert("Preencha o nome corretamente!");
        return false;
    }



    //adiciona paciente no array
    listaDeEspera.push(paciente)
    
    let listaTela = ""

    listaDeEspera.forEach(function (item, indice){
    listaTela += ` <li class="list-group-item">${indice+1} - ${item} </li>`
    })

    ulLista.innerHTML = listaTela


    //limpa o campo paciente
    document.querySelector("#paciente").value = ""
    //manda o foco da tela para o campo nome paciente
    document.querySelector("#paciente").focus()
}



function adicionarUrgencia() {
    console.log("adicionarUrgencia")
}

const atender = () => {
    console.log("atender")
}


btnAdd.addEventListener("click", adicionarLista);
btnUrg.addEventListener("click", adicionarUrgencia);
btnAtender.addEventListener("click", atender);