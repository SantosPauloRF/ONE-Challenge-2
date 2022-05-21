//Botoes da pagina inicial

const btnComecarJogar = document.getElementById("btnComecar");
btnComecarJogar.addEventListener('click', fnPaginaForca);

const btnAddPalavra = document.getElementById("btnAdicionar");
btnAddPalavra.addEventListener('click', fnPaginaAddPalavra )

//Botoes da pagina Forca

const btnNovoJogo = document.getElementById("btnNovoJogo");
btnNovoJogo.addEventListener('click', fnPaginaInicial);
var btnDesistir = document.getElementById("btnDesistir");
btnDesistir.addEventListener('click', fnDesistir);  //Se usuario desistir, ira retirar event listenr que só volta quando funcao limparCampos() e executada

//Botoes da pagina Add Palavra

const btnCancelar = document.getElementById("btnCancelar");
btnCancelar.addEventListener('click', fnPaginaInicial2)
var btnSalvarComecar = document.getElementById("btnSalvarComecar");
btnSalvarComecar.addEventListener('click', fnPaginaForca2)

//Acoes dos botoes

function fnPaginaForca(){
    const paginaForca = document.querySelector(".areaForcaHidden");
    const paginaInicial = document.querySelector(".botoes");
    paginaInicial.classList.replace("botoes", "botoesHidden");
    paginaForca.classList.replace("areaForcaHidden", "areaForca");
};

function fnPaginaInicial(){
    const paginaForca = document.querySelector(".areaForca");
    const paginaInicial = document.querySelector(".botoesHidden");
    paginaForca.classList.replace("areaForca", "areaForcaHidden");
    paginaInicial.classList.replace("botoesHidden", "botoes");
    limparCampos();
};

function fnPaginaInicial2(){
    const paginaPalavra = document.querySelector(".novaPalavra");
    const botoes = document.querySelector(".botoesHidden");
    botoes.classList.replace("botoesHidden", "botoes");
    paginaPalavra.classList.replace("novaPalavra", "novaPalavraHidden");
    limparCampos();
    novaPalavra.value = ""; 
};

function fnPaginaAddPalavra(){
    const paginaAddPalavra = document.querySelector(".novaPalavraHidden");
    const paginaInicial = document.querySelector(".botoes");
    paginaAddPalavra.classList.replace("novaPalavraHidden", "novaPalavra");
    paginaInicial.classList.replace("botoes", "botoesHidden");
};

function fnPaginaForca2(){
    let campo = document.getElementById("digiteSuaPalavra");
    let palavraNova = campo.value;

        if (palavraNova.includes(" ")){
            campo.value="Não digite espaços";
            document.getElementById("digiteSuaPalavra").select();
           

        }else if(palavraNova == 0){
            campo.value="Você não digitou nada!"
            document.getElementById("digiteSuaPalavra").select();

        }else{    
            palavras.push(campo.value);
            console.log("Você adicionou a palavra " + campo.value + " com sucesso");
            console.log("Veja quais palavras são possiveis no jogo, abaixo:");
            console.log(palavras);
            sorteioPalavra();
            tracosPalavra();
            novaPalavra.value = ""; 
            
            const paginaAddPalavra = document.querySelector(".novaPalavra");
            const paginaForca = document.querySelector(".areaForcaHidden");
            paginaAddPalavra.classList.replace("novaPalavra", "novaPalavraHidden");
            paginaForca.classList.replace("areaForcaHidden", "areaForca");
        };
    };

function fnDesistir(){
    let confirmar = confirm("Quer desistir mesmo??");
    if(confirmar == true){
        var imagem = document.getElementById("imagemErros");
        imagem.classList.add("chances0");
        comparar.disabled = true;
        btnDesistir.removeEventListener('click', fnDesistir);
        var vencedor = document.getElementById("ganhouId");
        vencedor.classList.add("ganhouHidden");
    }; 
};   

