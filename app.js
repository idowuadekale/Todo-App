//Selectors
const TodoInput = document.querySelector('.todo-input');
const TodoButton = document.querySelector('.todo-button');
const TodoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener("click, addTodo");


//Functions

function addTodo(event) {
    //prevent form from submittting
    event.preventDefault();
    //Todo DiV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //CREATE LI
    const newtodo = document.createElement('li');
    newTodo.inneertext = 'hey';
    newTodo.classList.add('todo-item')
    todoDiv.appendChild('newTodo');
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    TodoList.appendChild(todoDiv);
}