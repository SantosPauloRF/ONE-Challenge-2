var imagem = document.getElementById("imagemErros");
var novaPalavra = document.getElementById("digiteSuaPalavra");
var palavras = ["azul", "navio", "paulista", "carioca", "roque", "luna", "liz", "paulo", "pastel", "esfiha", "fatima"];
var palavraAleatoria = palavras[sorteioPalavra()]
var chances = 5;
var imagemErro = document.getElementById("imagens");
var ganhou = 0;

const clickComecar = document.getElementById("btnComecar");
clickComecar.addEventListener('click', tracosPalavra);

var comparar = document.getElementById("digite")
comparar.addEventListener('keypress', espera )

    function sorteioPalavra(){
        var min = 0;
        var max = palavras.length;
        var calculo = Math.floor(Math.random() * (max - min)) + min
                
        return calculo;
    };

    function tracosPalavra(){
        
        for (var i = 0; i < palavraAleatoria.length; i++){

            if (i == 0){
                var mudar = document.getElementById("letra0");
                mudar.classList.replace("naoMostraLetra", "mostraLetra");
            };
            if (i == 1){
                var mudar = document.getElementById("letra1");
                mudar.classList.replace("naoMostraLetra", "mostraLetra");
            };
            if (i == 2){
                var mudar = document.getElementById("letra2");
                mudar.classList.replace("naoMostraLetra", "mostraLetra");
            };
            if (i == 3){
                var mudar = document.getElementById("letra3");
                mudar.classList.replace("naoMostraLetra", "mostraLetra");
            };
            if (i == 4){
                var mudar = document.getElementById("letra4");
                mudar.classList.replace("naoMostraLetra", "mostraLetra");
            };
            if (i == 5){
                var mudar = document.getElementById("letra5");
                mudar.classList.replace("naoMostraLetra", "mostraLetra");
            };
            if (i == 6){
                var mudar = document.getElementById("letra6");
                mudar.classList.replace("naoMostraLetra", "mostraLetra");
            };
            if (i == 7){
                var mudar = document.getElementById("letra7");
                mudar.classList.replace("naoMostraLetra", "mostraLetra");
            };

        };
        console.log("________________________");
        console.log("A palavra é: >> " + palavraAleatoria.toUpperCase() + " <<");
        console.log("Você possui: " + chances + " Chances");
    };

    function espera (){
        setTimeout(fnComparar,100);
    };

    function fnComparar(){
        palavraAleatoria = palavraAleatoria.toUpperCase();
        var compara = comparar.value.toUpperCase();

            if (palavraAleatoria.includes(compara)){
                var palavraArray = palavraAleatoria.split([], palavraAleatoria.length);

                for (var i = 0; i < palavraArray.length; i++){

                    if (compara == palavraArray[i].toUpperCase()){

                        if (i == 0){
                            var testeLetra = document.getElementById("letra0");
                            testeLetra.value = compara;
                            comparar.value = "";
                            ganhou = ganhou + 1;
                            
                        }else if (i == 1){
                            var testeLetra = document.getElementById("letra1");
                            testeLetra.value = compara;
                            comparar.value = "";
                            ganhou = ganhou + 1;
                            
                        }else if (i == 2){
                            var testeLetra = document.getElementById("letra2");
                            testeLetra.value = compara;
                            comparar.value = "";
                            ganhou = ganhou + 1;
                            
                        }else if (i == 3){
                            var testeLetra = document.getElementById("letra3");
                            testeLetra.value = compara;
                            comparar.value = "";
                            ganhou = ganhou + 1;
                            
                        }else if (i == 4){
                            var testeLetra = document.getElementById("letra4");
                            testeLetra.value = compara;
                            comparar.value = "";
                            ganhou = ganhou + 1;
                            
                        }else if (i == 5){
                            var testeLetra = document.getElementById("letra5");
                            testeLetra.value = compara;
                            comparar.value = "";
                            ganhou = ganhou + 1;
                            
                        }else if (i == 6){
                            var testeLetra = document.getElementById("letra6");
                            testeLetra.value = compara;
                            comparar.value = "";
                            ganhou = ganhou + 1;
                            
                        }else if (i == 7){
                            var testeLetra = document.getElementById("letra7");
                            testeLetra.value = compara;
                            comparar.value = "";
                            ganhou = ganhou + 1;
                            
                        };
                    };
                };

            } else {
                
                var errou = document.getElementById("letrasErradas");

                    if (!errou.value.includes(compara)){
                        errou.value = errou.value + " " + compara;
                        comparar.value = "";
                        chances = chances - 1;
                    }else{
                        comparar.value = "";
                    };
                
            
            };

        imagemFundo();
        console.log("Você possui: " + chances + " Chances");

            if(chances == 0){
                comparar.disabled = true;
                console.log("perdeu playboy");
            }; 
            
            if (ganhou == palavraAleatoria.length){
                comparar.disabled = true;
                var vencedor = document.getElementById("ganhouId");
                vencedor.classList.replace("ganhouHidden", "ganhouMostra");
                console.log("Parabéns, ganhou!")
            };
    };
    

    function limparCampos(){
        var testeLetra = document.getElementById("letra0");
        testeLetra.classList.add("naoMostraLetra");
        testeLetra.value = "";
        var testeLetra = document.getElementById("letra1");
        testeLetra.value = "";
        testeLetra.classList.add("naoMostraLetra");
        var testeLetra = document.getElementById("letra2");
        testeLetra.value = "";
        testeLetra.classList.add("naoMostraLetra");
        var testeLetra = document.getElementById("letra3");
        testeLetra.value = "";
        testeLetra.classList.add("naoMostraLetra");
        var testeLetra = document.getElementById("letra4");
        testeLetra.value = "";
        testeLetra.classList.add("naoMostraLetra");
        var testeLetra = document.getElementById("letra5");
        testeLetra.value = "";
        testeLetra.classList.add("naoMostraLetra");
        var testeLetra = document.getElementById("letra6");
        testeLetra.value = "";
        testeLetra.classList.add("naoMostraLetra");
        var testeLetra = document.getElementById("letra7");
        testeLetra.value = "";
        testeLetra.classList.add("naoMostraLetra");
        var errou = document.getElementById("letrasErradas")
        errou.value = "";
        palavraAleatoria = palavras[sorteioPalavra()];
        chances = 5;
        comparar.disabled = false;
        var imagem = document.getElementById("imagemErros");
        imagem.classList.remove("chances4", "chances3", "chances2", "chances1", "chances0");
        btnDesistir.addEventListener('click', fnDesistir);
        var vencedor = document.getElementById("ganhouId");
        vencedor.classList.replace("ganhouMostra","ganhouHidden");
        ganhou = 0;
    };

    function imagemFundo(){
        imagem.classList.add("chances"+chances);
    };

