import * as module from "./SortTasks"
import { displayTasks } from "./display";

const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("toDo-Form");
const addContainer = document.querySelector(".addTodo");
const addTodo = document.getElementById("addBtn");
const customChoice = document.querySelector(".customSelect");

export let storeTasks = JSON.parse(localStorage.getItem("storeTasks")) || [];

// CLASS //
class Task{
    constructor(title, inputDate, dueDate, priority){
        this.title = title;
        this.inputDate = inputDate;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// FUNCTIONS //
function pushTasks(){
    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("dueDate").value;
    const inputDate = new Date();
    
    let priority = "";

    if (document.getElementById("low").checked === true){
        priority = document.getElementById("low").value;
    }
    if (document.getElementById("middle").checked === true){
        priority = document.getElementById("middle").value;
    }
    if (document.getElementById("high").checked === true){
        priority = document.getElementById("high").value;
    }

    document.getElementById("title").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("low").checked = false;
    document.getElementById("middle").checked = false;
    document.getElementById("high").checked = false;

    if(title === "" || dueDate === "" || priority === "") {
        return alert("Vous devez remplir les champs.")
    }

    const newTask = new Task(title, inputDate, dueDate, priority);

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
form.addEventListener("submit", handleForm);

submitBtn.addEventListener("click", () => {
    pushTasks();
    customChoice.classList.remove("hidden");
    addContainer.classList.add("hidden")
});


addTodo.addEventListener("click", () => {   
    addContainer.classList.remove("hidden");
})

window.addEventListener("load", () => {
    userName();
    displayTasks();
    if(document.querySelector(".container").innerHTML != ""){
        customChoice.classList.remove("hidden");
    }else{
        customChoice.classList.add("hidden");
    }
})