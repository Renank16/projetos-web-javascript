const btn =  document.getElementById("btn");
const lista = document.getElementById('lista-tarefas')

btn.addEventListener('click', ()=>{
    var tarefa = document.getElementById("input").value;
    if(tarefa===""){
        alert("Por favor, escreva uma tarefa!")
    }else{
        var item = document.createElement('label')
        var container = document.createElement('div')
        container.classList.add('custom-checkbox')
        container.setAttribute('display', 'flex')
        var check = document.createElement('input')
        check.setAttribute('type', 'checkbox');
        var texto = document.createTextNode(tarefa);

        item.appendChild(texto);
        container.appendChild(check); 
        container.appendChild(item); 
        lista.appendChild(container);
        
    }

})

