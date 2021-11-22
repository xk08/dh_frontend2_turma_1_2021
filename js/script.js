let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let btn = document.querySelector('#btn');

btn.addEventListener('click', cadastrarNovoPost);

//Está sendo utilizado Async/Await (Função Assincrona)
async function cadastrarNovoPost(event) {

  event.preventDefault();

  // url para onde enviar o request para criação de recurso (post)
  let url = `https://jsonplaceholder.typicode.com/posts`;


  //Criando objeto js
  let post = {
    title: title.value,
    desc: desc.value
  }

  //Convertendo o objeto para Json(String)
  let postString = JSON.stringify(post);

  // montando o objeto com os parâmetros do request assíncrono:
  // method, headers, body
  let params = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: postString
  }

  //Enviando a requisição
  let response = await fetch(url, params); //POST

  //Convertendo o resultado do response
  var postJson = await response.json();


  console.log(postJson);

  //Exibindo na pagina HTML
  document.querySelector('p').innerText = `Post cadastrado com sucesso! Id = ${postJson.id}`;



  /*
  //Maneira de fazer direto

   fetch(url, {
    method: 'POST',
    headers: { 'Content-type' : 'application/json' },
    body: JSON.stringify({
      title: title.value,
      desc: desc.value
    })
  })
  .then( resposta => resposta.json() )
  .then( postCadastrado => {
    console.log(postCadastrado);

    document.querySelector('p').innerText = `Post cadastrado com sucesso! Id = ${postCadastrado.id}`;
  });
  
  */

}


