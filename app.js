let textbox = document.querySelector('.get-text');
let addBtn = document.querySelector('.fa-plus');
let taskWrapper = document.querySelector('.task-wrapper')

addBtn.addEventListener('click',addTask);

function addTask(e){

    let taskTitle = textbox.value;
    textbox.value = "";

    let todoBox = document.createElement('div')
    todoBox.classList.add("to-do")
    
    let newTask = `
                <div class="title">${taskTitle}</div>
                <div class="action">
                    <i class="fa-solid fa-check"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
    `;
    todoBox.innerHTML =newTask;
    taskWrapper.appendChild(todoBox);
    
}