//IMC
//1.capturar os valores
//2.calcular IMC
//3.Gerar a classificação do IMC
// 4 Organizar as informações
// 5. Salvar os dados em lista (array) -> localStorage
//6 ler a lista com dados (array) -> localStorage
//7 renderizar o conteudo na tela
//8 botão limpar registros -> clear localSotarage

// Função para receber valores do imput e convertyer o mesmo para 
// um objeto


function pegarValore(){
    let nome = document.getElementById('nome').ariaValueMax.trim();
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById9('peso').value);

    let dadoUsuario = {
        nomeUsuario: nome,
        alturaUsuario: altura,
        pesoUsuario: peso
    }
    return dadoUsuario;

}

function calcular(altura,peso){
    let imc= peso/altura*altura;
    return imc;

}
function classicacaoIMC{
    if(imc < 18){
        return "Abaixo do peso";

    }else if (imc<25){
        return "peso normal"
        
    }else if(imc<30){
        return "SobrePeso"
    }else if(imc<35){

    }else{
        return "obesidade 2 e 3 "
    }
}

function OrganizarDados(dadoUsuario, valorImc,classicacaoIMC){
    let dataAtual = Intl.DateTimeFormat('pt-BR',{timeStyle:'long',dateStyle:'short'}).format(Date.now());
    let dadosUsuarioAtt = {
        ...dadoUsuario,
        imc: valorImc.toFixed(2)
        classificacao : classicacaoIMC,
        dataCadastro: dataAtual

    }
    //funçãO RESPONSavel por armazenar o objeto dentro do local Storage

    function cadastrarUsuario(usuario){
        let listaDeUsuario =[]
        if(localStorage.getItem("UsuariosCadastrados")){
            listaDeUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))
        }
        listaDeUsuario.push(usuario)
        localStorage.setItem("UsuarioCadastros", JSON.stringify(listaDeUsuario))
    }
}
    
