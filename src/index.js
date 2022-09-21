const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("toDo-Form");
const selectSort = document.getElementById("sortTodo")

let storeTasks = JSON.parse(localStorage.getItem("storeTasks")) || [];

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

function displayTasks(){
    const container = document.querySelector(".container");
    container.innerHTML = "";

    storeTasks.forEach(tasks => {
        const card = document.createElement("div");
        const checkBox = document.createElement("input");
        const content = document.createElement("div");
        const editBtn = document.createElement("button");
        const dltBtn = document.createElement("button");

        card.classList.add("card");
        checkBox.setAttribute("type", "checkbox");
        checkBox.classList.add("toDo-check");
        content.classList.add("todoContent")
        editBtn.classList.add("editBtn");
        dltBtn.classList.add("dltBtn");

        content.innerHTML = `<input type=text value="${tasks.title}" id="cardInput" readonly> <p>${tasks.dueDate}</p>`;
        editBtn.textContent = "Edit";
        dltBtn.textContent = "Delete";

        if (tasks.done){
            const input = content.querySelector("input");
            checkBox.checked = true;
            input.classList.add("done");
            card.classList.add("doneCard")
        } 

        checkBox.addEventListener("change", e => {
            const input = content.querySelector("input");
            tasks.done = e.target.checked;
            
            if (tasks.done){
                input.classList.add("done");
                card.classList.add("doneCard")
            }else{
                input.classList.remove("done");
                card.classList.remove("doneCard")
            }
            localStorage.setItem("storeTasks", JSON.stringify(storeTasks));
        })

        editBtn.addEventListener("click", e => {
            const input = content.querySelector("input");
            input.removeAttribute("readonly");
            input.focus();
            input.addEventListener("blur", e => {
                input.setAttribute("readonly", true);
                tasks.title = e.target.value;
                localStorage.setItem("storeTasks", JSON.stringify(storeTasks));
                displayTasks();
            })
        })

        dltBtn.addEventListener('click', (e) => {
			storeTasks = storeTasks.filter(t => t != tasks);
			localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
			displayTasks();
		})
  
        container.appendChild(card);
        card.appendChild(checkBox);
        card.appendChild(content);
        card.appendChild(editBtn);
        card.appendChild(dltBtn);

    });
}

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

function sortsTasksDate(a, b){
    if (a.dueDate < b.dueDate){
        return -1;
    }
    if (a.dueDate > b.dueDate){
        return 1;
    }
    return 0;

}

function sortsTasksAlphabetic(a, b){
    if (a.title < b.title){
        return -1;
    }
    if (a.title > b.title){
        return 1;
    }
    return 0;
}

// ADD EVENT LISTENER //
submitBtn.addEventListener("click", pushTasks);
form.addEventListener("submit", handleForm);

selectSort.addEventListener("change", (event) => {
    if (event.target.value === "0"){
        storeTasks.sort(sortsTasksAlphabetic);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
    if (event.target.value === "1"){
        storeTasks.sort(sortsTasksDate);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
})

window.addEventListener("load", () => {
    userName();
    displayTasks();
})