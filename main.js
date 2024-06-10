window.addEventListener('DOMContentLoaded', function (){

    let formulario = document.getElementsByClassName("formulario")[0]
 
    formulario.addEventListener('submit', (e) =>{
     e.preventDefault();
     let obj = {nome: e.target[0].value, email: e.target[1].value, mensagem: e.target[2].value}
     console.log(obj);
     setTimeout(()=>{
         alert('Agradeço o contato, entrarei em contato assim que puder');
         window.location.href = "#";
         document.getElementById("nome").value = '';
         document.getElementById("email").value = '';
         document.getElementById("mensagem").value = '';
 
     },2000)
    });
 })

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)

  });
}

const titulo = document.querySelector('#subtitulo');
typeWrite(titulo);