const textbox = document.querySelector('.get-text');
const addBtn = document.querySelector('.fa-plus');
const taskWrapper = document.querySelector('.task-wrapper');


const completeBtn = document.querySelector('.complete-btn');
const dropdown = document.querySelector('#filter');

addBtn.addEventListener('click',addTask);
taskWrapper.addEventListener('click',checkAndRemove)
dropdown.addEventListener('click',filterTask)
document.addEventListener('DOMContentLoaded',getDataFromStorage)


function addTask(e){

    let taskTitle = textbox.value;
    
    let todoBox = document.createElement('div')
    todoBox.classList.add("to-do")
    
    let newTask = `
    <div class="title">${taskTitle}</div>
    <div class="action">
    <i class="fa-solid fa-check complete-btn"></i>
    <i class="fa-solid fa-trash"></i>
    </div>
    `;
    todoBox.innerHTML = newTask;
    taskWrapper.appendChild(todoBox);
    saveDataToStorage(textbox.value);
    textbox.value = "";
    
}

function checkAndRemove(e){

    const classList = [...e.target.classList];
    const item = e.target;

    if(classList[1] == 'fa-check'){
        item.parentElement.parentElement.classList.toggle('completed')
    }
    else if(classList[1] == 'fa-trash'){
        const todo = item.parentElement.parentElement;
        removeDataFromStorage(todo);
        todo.remove()
    }
}

function filterTask(e){
    const selectedOption = e.target.value;

    const todos = [...taskWrapper.childNodes]
    
    todos.forEach((todo) => {
        switch (selectedOption) {
            case "1":
                todo.style.display = "flex";
                break;
            case "2":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "3":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                                      
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    })
    
}

function saveDataToStorage(todo){

    const savedTodos = localStorage.getItem('todos') ?
    JSON.parse(localStorage.getItem('todos')) 
    : [];

    savedTodos.push(todo);

    localStorage.setItem('todos', JSON.stringify(savedTodos));

}

function getDataFromStorage(){

    const savedTodos = localStorage.getItem('todos') ?
    JSON.parse(localStorage.getItem('todos'))
    : [];

    savedTodos.forEach((todo)=>{

        let todoBox = document.createElement('div')
        todoBox.classList.add("to-do")
    
        let newTask = `
        <div class="title">${todo}</div>
        <div class="action">
        <i class="fa-solid fa-check complete-btn"></i>
        <i class="fa-solid fa-trash"></i>
        </div>
        `;
        todoBox.innerHTML = newTask;
        taskWrapper.appendChild(todoBox);

    })

}

function removeDataFromStorage(todo){
    const savedTodos = localStorage.getItem('todos') ?
    JSON.parse(localStorage.getItem('todos'))
    : [];

    const filteredTodos = savedTodos.filter( (t) => t != todo.children[0].innerText)
    localStorage.setItem('todos' , JSON.stringify(filteredTodos));
};