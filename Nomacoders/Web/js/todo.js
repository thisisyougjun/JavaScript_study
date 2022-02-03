const toDoForm = document.getElementById("todo_form")
const toDoInput = document.querySelector("#todo_form input")
const toDoList= document.getElementById("todo-list")

const TODOS_KEY ="todos"

let toDos = [];

function deleteTodo(){
    const li=event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=>toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text;
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newToDo,
        id :Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos()
}

toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos  =localStorage.getItem(TODOS_KEY)

if (savedToDos){
    const parsedToDos =JSON.parse(savedToDos)
    toDos =parsedToDos
    parsedToDos.forEach(paintToDo)
}

