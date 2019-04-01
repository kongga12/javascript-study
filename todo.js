const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = 'toDos'

let toDos = []

function deleteToDo(event) {
    const btn = event.target
    const li = btn.parentNode
    toDoList.removeChild(li)
    console.log(event.target.parentNode)
    // console.log(localStorage)
    const cleanToDos = toDos.filter(function(toDo){
        // console.log(typeof(toDo.id), typeof(parseInt(li.id)));
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos
    saveToDos()
    // localStorage.removeItem(selId)
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text) {
    // console.log(text)
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    const newId = toDos.length + 1
    // const newId = li.id + 1
    const span = document.createElement("span")
 
    delBtn.innerHTML = "❌"
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text
    li.appendChild(delBtn)
    li.appendChild(span)
    li.id = newId
    toDoList.appendChild(li)
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj)
    saveToDos()
    
}

function handleSubmit(event) {
    event.preventDefault()
    const currentValue = toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value = ""
}

// function something(toDo) {
//     console.log(toDo.text)
// }

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if (loadedToDos !== null) {
        // console.log(loadToDos)
        const parsedToDos = JSON.parse(loadedToDos) //object형식으로 변환
        // parsedToDos.forEach(something);
        // console.log(parsedToDos)
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text)
        });
    }
}

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmit)
}

init()