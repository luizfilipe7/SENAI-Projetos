const listaDeEspera = []

function adicionarLista(urgencia) {
    console.log("add lista")
    let paciente = document.querySelector("#paciente").value //pega o nome na tela
    let ulLista = document.querySelector("#listaEspera") //sai com a lista

    if (paciente == ""){
    alert("Preencha o nome corretamente!");
    return false;
    }
    


    //verifica se variável "urgência" é true. Se sim dá unshift, se não da push.
    if(urgencia){
        listaDeEspera.unshift(paciente)
    }else{
        listaDeEspera.push(paciente)
    }

    //adiciona paciente no array
    
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
//arrow function e função anônima
const atender = () => {
    let paciente = document.querySelector("#paciente").value //pega o nome na tela
    let ulLista = document.querySelector("#listaEspera") //sai com a lista
    let nomeAtendimento = document.querySelector("#nomePessoaAtendimento")

    if(listaDeEspera.length === 0){
        alert("Não existem pacientes na lista de espera")
        document.querySelector("#paciente").focus()
    return
    }

    //removendo o primeiro paciente e guardando na let pacienteEmAtendimento
    let pacienteEmAtendimento = listaDeEspera.shift()
    console.log(pacienteEmAtendimento)

    nomeAtendimento.innerHTML = pacienteEmAtendimento
    document.querySelector("#alertAtendimento").style = "Display:block"

  
    let listaTela = ""

    listaDeEspera.forEach(function (item, indice){
    listaTela += ` <li class="list-group-item">${indice+1} - ${item} </li>`
    })

    ulLista.innerHTML = listaTela

}


btnAdd.addEventListener("click", () => adicionarLista(false));
btnUrg.addEventListener("click", () => adicionarLista(true));
btnAtender.addEventListener("click", atender);