//Define variáveis globais
var barraVerdeProgressoGlobal = 0;
var barraLaranjaProgressoGlobal = 0;
let barraVerdeTamanhoInicialGlobal = 0;
let barraLaranjaTamanhoInicialGlobal = 0;
let contadorGlobal = 1;

/* Função que realiza a animação da barra-verde  */
function avancaBarraVerde(recebeValor) {

    var elem = document.getElementById("barraVerdeProgresso"); //Captura a classe referente ao progresso da barra verde
    /* SetInterval: Chama de forma recursiva (looping) a função "frame" até que a condição de parada, seja encontrada */
    var id = setInterval(frame, 10); // 1s == 1000 ms


    //Executa a animação da barra, alterando as propriedades do css de acordo com as informações recebidas
    function frame() {
        if (barraVerdeTamanhoInicialGlobal >= recebeValor) {
            //Finaliza a execução do lopping da linha 13
            clearInterval(id);
        } else {
            barraVerdeTamanhoInicialGlobal++; //Incrementa o valor do tamanho-inicial da barra
            //Altera os estilos do css (Efetiva a animação visual)
            elem.style.width = barraVerdeTamanhoInicialGlobal + "%";
            elem.innerHTML = barraVerdeTamanhoInicialGlobal + "%";
        }
    }
}

/* Função que realiza a animação da barra-laranja  */
function avancaBarraLaranja(recebeValor) {

    var elem = document.getElementById("barraLaranjaProgresso"); //Captura a classe referente ao progresso da barra laranja
    var id = setInterval(frame, 10); // 1s == 1000 ms


    function frame() {
        if (barraLaranjaTamanhoInicialGlobal >= recebeValor) {
            clearInterval(id);
        } else {
            barraLaranjaTamanhoInicialGlobal++;
            elem.style.width = barraLaranjaTamanhoInicialGlobal + "%";
            elem.innerHTML = barraLaranjaTamanhoInicialGlobal + "%";
        }
    }
}

function avanca() {

    /* Verifica se a barra-laranja, já se encontra cheia. Desta maneira, exibe um alerta ao usuário */
    if (barraLaranjaProgressoGlobal == 100) {
        alert("Você já realizou as 5 interações previstas no sistema");
    } else {

        if (barraVerdeProgressoGlobal < 100) {
            barraVerdeProgressoGlobal += 10; // avança de 10% em 10%
            //Chama função que anima a barra e envia valor por parametro
            avancaBarraVerde(barraVerdeProgressoGlobal);
        } else {

            if (barraLaranjaProgressoGlobal < 100) {
                barraLaranjaProgressoGlobal += 20; // avança de 20% em 20%
                avancaBarraLaranja(barraLaranjaProgressoGlobal);

                //Reseta os valroes da barra-verde
                barraVerdeProgressoGlobal = 0;
                barraVerdeTamanhoInicialGlobal = 0;

                //Exibe em tela o valor das interações realizadas
                document.querySelector('h4').innerText = `Interações: 0${contadorGlobal++}`

            }
        }
    }
}