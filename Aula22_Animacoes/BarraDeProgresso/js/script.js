
var barraVerdeProgressoGlobal = 0;
var barraLaranjaProgressoGlobal = 0;
let barraVerdeTamanhoInicialGlobal = 0;
let barraLaranjaTamanhoInicialGlobal = 0;
let contadorGlobal = 1;

function avancaBarraVerde(recebeValor) {

    var elem = document.getElementById("barraVerdeProgresso");
    var id = setInterval(frame, 10); // 1s == 1000 ms


    function frame() {
        if (barraVerdeTamanhoInicialGlobal >= recebeValor) {
            clearInterval(id);
        } else {
            barraVerdeTamanhoInicialGlobal++;
            elem.style.width = barraVerdeTamanhoInicialGlobal + "%";
            elem.innerHTML = barraVerdeTamanhoInicialGlobal + "%";
        }
    }
}

function avancaBarraLaranja(recebeValor) {

    var elem = document.getElementById("barraLaranjaProgresso");
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