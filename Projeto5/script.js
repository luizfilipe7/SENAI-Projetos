var frmNome 
var frmVeiculo
var frmPreco;
var mostrar

btnCalcular.addEventListener('click', function(){
    frmNome = nome.value
    frmVeiculo = veiculo.value
    frmPreco = preco.value
    mostrar = document.getElementById('mostrarResultado')

    entrada = frmPreco /2
    parcela = ((frmPreco/2)/60)*1.7


    // Link usado para conhecimento em formatar float para Real
    // https://www.horadecodar.com.br/2020/09/01/formatar-moeda-brasileira-em-javascript-float-para-real/


    entradaBrl = entrada.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    parcelaBrl = parcela.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    

    mostrar.innerHTML = `
    <div> Prezado  ${frmNome}, o valor da entrada do veículo </div>
    <div Class="carro"> ${frmVeiculo} </div>
    <div> Deverá ser de  ${entradaBrl} </div>
    <div> + 60x de ${parcelaBrl} </div>
    `

})


