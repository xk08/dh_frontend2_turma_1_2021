
const btn = document.getElementById('adicionar');

const inputText = document.getElementById('input');

//Começo por aqui
function revisaoDOM() {

    let nome = "Charles";
    //usa-se aspas ``e não '' ou ""
    let nomeTemplate = `O nome do usuário é ${nome}`;

    console.log("Exibindo no console\n");
    console.log(nomeTemplate);
}

//Depois essse
btn.addEventListener('click', function (evento) {

    evento.preventDefault();

    let nome = inputText.value;

    //usa-se aspas ``e não '' ou ""
    let nomeTemplate = `O nome do usuário é ${nome}`;

    console.log("Exibindo o nome no console\n");
    console.log(nomeTemplate);

    console.log("Exibindo o QuerySelector - InnerHtml");
    console.log(document.querySelector('h3').innerHTML);

    console.log("\n");


    console.log("Exibindo o QuerySelector - InnerText");
    console.log(document.querySelector('h3').innerText);

    console.log("Alterar o texto presente no H3 (Inner-Text)");
    document.querySelector('h3').innerText = "Novo Texto";

    console.log("Alterar o texto presente no H3 (Inner-Text)");
    document.querySelector('h3').innerHTML = '<h1>Texto maior</h1>';






    console.log("\n");
    console.log("Manipulando NÓS com DOM");

    //Criando um novo nó do tipo textual
    let novoTexto = document.createTextNode("Digital House Brasil");
    console.log(novoTexto);
    //console.log(novoTexto.data);

    //Atribuindo ao <p>
    document.querySelector('p').innerText = novoTexto;
    //document.querySelector('p').innerText = novoTexto.data;

    console.log(novoTexto.data);

    console.log("\n");






    //Aprendendo a fazer o Apend nos Nós
    console.log("Adicionando elementos LI(itens) a lista UL");

    //Definindo o texto do item que vai ser salo
    var textoDoItem = document.createTextNode("Novo item");

    //Criando novo nó do tipo <li>
    var novoNo = document.createElement("li");

    // li = "Novo item"
    novoNo.appendChild(textoDoItem);

    //Adicionando o li ao UL
    document.getElementById("lista").appendChild(novoNo);

    //Removendo um item <li> da lista <ul>

    /* //Capturando todos os elementos da Lista <ul>
    var listLI = document.getElementById("lista");

    console.log(listLI);

    //Remove o ultimo elemento da lista
    listLI.removeChild(listLI.lastElementChild); */
});






