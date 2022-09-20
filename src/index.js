const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("toDo-Form");

let storeTasks = [];

// CLASS //
class Task{
    constructor(title){
        this.title = title;
    }
}

// FUNCTIONS //
function pushTasks(){
    const title = document.getElementById("title").value;

    document.getElementById("title").value = "";

    const newTask = new Task(title);
    storeTasks.push(newTask);
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

        content.innerHTML = `<input type=text value="${tasks.title}" readonly>`;
        editBtn.textContent = "Edit";
        dltBtn.textContent = "Delete"
  
        container.appendChild(card);
        card.appendChild(checkBox);
        card.appendChild(content)
        card.appendChild(editBtn);
        card.appendChild(dltBtn)

        editTasks()
        removeTasks()
    });
}

function removeTasks(){
    const dltBtn = document.querySelector(".dltBtn")
    dltBtn.addEventListener("click", function() {
            storeTasks.splice(this.parentElement.getAttribute("data-index"), 1);
            this.parentElement.remove();
    });
}

function editTasks(){
    const content = document.querySelector(".todoContent");
    const editBtn = document.querySelector(".editBtn");
    storeTasks.forEach(tasks => {
        editBtn.addEventListener("click", e => {
            const input = content.querySelector("input")
            input.removeAttribute("readonly");
            input.focus();
            input.addEventListener("blur", e => {
                input.setAttribute("readonly", true);
                tasks.title = e.target.value;
                displayTasks()
            })
        })
    })
}

function handleForm(event){
    event.preventDefault();
}

// ADD EVENT LISTENER //
submitBtn.addEventListener("click", pushTasks);
form.addEventListener("submit", handleForm);