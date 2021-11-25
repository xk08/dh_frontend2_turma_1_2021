//Capturando as interações feitas nos elementos HTML
let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let btn = document.querySelector('#btn');

//Chamando a função de cadastro ao clicar no botão
btn.addEventListener('click', cadastrarNovoPost);

//Está sendo utilizado Async/Await (Função Assincrona)
async function cadastrarNovoPost(event) {

  event.preventDefault();

  //Obtendo url da API
  let url = 'https://jsonplaceholder.typicode.com/posts';

  //Montando objeto js que será enviado para a API
  let post = {
    title: title.value, //captura o valor presente no campo
    desc: desc.value
  }

  //convetendo objeto js para Json
  let postString = JSON.stringify(post);

  //Criando objeto 'params' que será enviado na requisição
  /* Esse objeto contém as principais informações que o endpoint da API necessita */
  let params = {
    method: 'POST', //endpoint
    headers: { //cabeçalho
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: postString //corpo da requisição
  }

  // Chamando a requisição no endpoint da API
  let response = await fetch(url, params); //Precisa ser assincrono!

  //Obtendo o "data" do response que foi pego na requisição
  var postJson = await response.json(); //Precisa ser assincrono!

  console.log(postJson);

  //Exibindo o id retornado pela API na tag <p> da pagina HTML
  document.querySelector('p').innerText = `Post cadastrado com sucesso! Id = ${postJson.id}`;

}