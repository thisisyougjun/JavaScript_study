const toDoForm = document.getElementById("todo_form")
const toDoInput = document.querySelector("#todo_form input")
const toDoList= document.getElementById("todo-list")

const TODOS_KEY ="todos"

let toDos = [];

function deleteTodo(){
    const li=event.target.parentElement;
    li.remove();
}

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo;
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

function sayHello(item){
    console.log("this is turn of",item)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos()
}

toDoForm.addEventListener("submit",handleToDoSubmit)

const savedToDos  =localStorage.getItem(TODOS_KEY)

if (savedToDos){
    const parsedToDos =JSON.parse(savedToDos)
    toDos =parsedToDos
    parsedToDos.forEach(paintToDo)
}

