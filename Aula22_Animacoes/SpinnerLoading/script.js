var porcent = document.querySelector('.porcent');
var loading = document.querySelector('.loading');

var count = 0; //Define o ponto inicial da animação

var load = setInterval(animate, 20);

function animate(){
    if(count == 100){
        loading.parentElement.removeChild(loading);
        clearInterval(load);
    }
    else{
        count = count + 1;
        porcent.textContent = count + '%';
    }
}