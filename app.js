let textbox = document.querySelector('.get-text');
let addBtn = document.querySelector('.fa-plus');
let taskWrapper = document.querySelector('.task-wrapper');

let completeBtn = document.querySelector('.complete-btn');

addBtn.addEventListener('click',addTask);

taskWrapper.addEventListener('click',completeTask)

function addTask(e){

    let taskTitle = textbox.value;
    textbox.value = "";

    let todoBox = document.createElement('div')
    todoBox.classList.add("to-do")
    
    let newTask = `
                <div class="title">${taskTitle}</div>
                <div class="action">
                    <i class="fa-solid fa-check complete-btn"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
    `;
    todoBox.innerHTML =newTask;
    taskWrapper.appendChild(todoBox);
    
}

function completeTask(e){

    const classList = [...e.target.classList];
    const item = e.target;

    if(classList[1] == 'fa-check'){
        item.parentElement.parentElement.classList.toggle('completed')
    }
    else if(classList[1] == 'fa-trash'){
        item.parentElement.parentElement.remove();
    }
}



