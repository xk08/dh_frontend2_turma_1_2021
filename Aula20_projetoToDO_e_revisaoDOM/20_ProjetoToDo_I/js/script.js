
let inputText = document.getElementById("nova-tarefa");
let button = document.getElementById("adicionar-tarefa");

let tarefasPendentes = document.querySelector(".tarefas-pendentes");
let tarefasConcluidas = document.querySelector(".tarefas-concluidas");

//Recebe o elemento pai <ul> ->  tarefasPendentes
let criaCard = (elementoPai) => {

    //Descreve  estrutura do card <li>
    elementoPai.innerHTML += `<li class="tarefa">
                                <div class="not-done"></div>
                                <div class="descripcion">
                                    <p class="nome">${inputText.value}</p>
                                </div>
                            </li>`;
}

function criaCardComAppend(elementoPai) {

    let conteudoLi = document.createTextNode(
        `<li class="tarefa">
            <div class="not-done"></div>
            <div class="descripcion">
                <p class="nome">${inputText.value}</p>
            </div>
        </li>`);

    //Criando elemento <li>
    let defineCardLi = document.createElement('li');

    //Atribuindo o conteúdo no elemento <li>
    defineCardLi.innerHTML = conteudoLi.data;

    //Atribuindo o <li> ao elemento pai <ul>
    elementoPai.appendChild(defineCardLi);

}

button.addEventListener('click', function (evento) {
    evento.preventDefault();

    //criaCard(tarefasPendentes);
    criaCardComAppend(tarefasPendentes)

    //Limpando o valor digitado no input
    inputText.value = "";

})

//Interagindo com os elementos da lista pendente
tarefasPendentes.addEventListener('click', evento => {

    // div <div = tarefa>
    let card = evento.target.parentNode;

    if (evento.target.classList.contains('not-done')) {

        //Remove o <li> do elemento pai <ul>
        card.parentNode.removeChild(card);

        //Adicionando o card <li> na outra lista <ul>
        tarefasConcluidas.appendChild(card);
    }
})

