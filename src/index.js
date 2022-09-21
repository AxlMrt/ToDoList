import * as module from "./SortTasks"
import { displayTasks } from "./display";

const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("toDo-Form");
const selectSort = document.getElementById("sortTodo")

export let storeTasks = JSON.parse(localStorage.getItem("storeTasks")) || [];

// CLASS //
class Task{
    constructor(title, inputDate, dueDate){
        this.title = title;
        this.inputDate = inputDate;
        this.dueDate = dueDate;
    }
}

// FUNCTIONS //
function pushTasks(){
    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("dueDate").value;
    const inputDate = new Date();

    document.getElementById("title").value = "";

    if(title === "" || dueDate === "") {
        return alert("Vous devez remplir les champs.")
    }

    const newTask = new Task(title, inputDate, dueDate);

    storeTasks.push(newTask);
    localStorage.setItem("storeTasks", JSON.stringify(storeTasks));

    displayTasks();
};

function handleForm(event){
    event.preventDefault();
}

function userName(){
    const nameInput = document.getElementById("nameInput");
    const username = localStorage.getItem("username") || "";

    nameInput.value = username;

    nameInput.addEventListener("change", e => {
        localStorage.setItem("username", e.target.value);
    })
}


// ADD EVENT LISTENER //
submitBtn.addEventListener("click", pushTasks);
form.addEventListener("submit", handleForm);

selectSort.addEventListener("change", (event) => {
    if (event.target.value === "0"){
        storeTasks.sort(module.date);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
    if (event.target.value === "1"){
        storeTasks.sort(module.alphabetic);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
    if (event.target.value === "2"){
        storeTasks.sort(module.isDone);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
})

window.addEventListener("load", () => {
    userName();
    displayTasks();
    module.date
})

let newArr = [{}]
