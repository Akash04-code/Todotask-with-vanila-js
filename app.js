// selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// event listner

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click" , deleteCheck)
filterOption.addEventListener("click",filterTodo)

// function
function addTodo(event){
    // Prevent from submitting
    event.preventDefault();
    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check Mark Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Appened to List

    todoList.appendChild(todoDiv);

    // clear todoInput value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;

    // Delete Todo
    if(item.classList[0] === "trash-btn"){
     const todo = item.parentElement;
    //  Animation
     todo.classList.add("fall");
     todo.addEventListener('transitionend' , function(){
        todo.remove();
     })
    
    }

    //CHECK Mark

    if(item.classList[0 ]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
 const todos = todoList.childNodes;
 todos.forEach(function(todo){
    switch(e.target.value){
        case "All":
            todo.style.display = 'flex'
        break;
        case "completed" :
            if(todo.classList.contains("completed")){
                todo.style.display = "flex";
            } else {
                todo.style.display="none";
            }
            break;
        case "uncompleted" :
            if(!todo.classList.contains("Completed")){
                todo.style.display = "flex";
            } else {
                todo.style.display="none";
            }
           break; 
    }
 });

}