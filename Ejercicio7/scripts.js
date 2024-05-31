const listado = $("listado");
const mostrar = $("mostrar");
const listaTareas = $("listaTareas");

let isButtonClicked = false;

mostrar.addEventListener("click", async () =>{
    if (isButtonClicked){
        return;
    }
    isButtonClicked = true;
    
    const resPersona = await fetch("https://jsonplaceholder.typicode.com/users");
    if(resPersona.ok) {
        const personas = await resPersona.json();
        personas.forEach(persona => {
            const item = document.createElement('li')
            item.textContent = `${persona.id} , ${persona.name} , ${persona.username} ,${persona.email} , ${persona.website}`;

            const buttonTareas = document.createElement('button');
            buttonTareas.textContent = "Ver Tareas";

            listado.appendChild(item);
            listado.appendChild(buttonTareas);
            
            buttonTareas.addEventListener('click', async () =>{
            const resTarea = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${persona.id}`);

            if (resTarea.ok){
                const tareas = await resTarea.json();

                listaTareas.innerHTML = '';
                tareas.forEach(tarea => {
                    const itemTarea = document.createElement('li');
                    itemTarea.textContent = tarea.title;
                    if (tarea.completed){
                        itemTarea.style.color = "green";
                    }else{
                        itemTarea.style.color = "red";
                    }
                    listaTareas.appendChild(itemTarea);
                });                
            }
            })
            
        });
        
    }else {
        console.error("Error: los datos no llegaron...");
    }
});


function $(elemento) {
    return document.getElementById(elemento);
}