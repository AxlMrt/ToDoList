const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("toDo-Form");

storeTasks = JSON.parse(localStorage.getItem("storeTasks")) || [];

// CLASS //
class Task{
    constructor(title, inputDate){
        this.title = title;
        this.date = inputDate;
    }
}

// FUNCTIONS //
function pushTasks(){
    const title = document.getElementById("title").value;
    const inputDate = new Date();

    document.getElementById("title").value = "";
    document.querySelectorAll("label input").value = "";

    const newTask = new Task(title, inputDate);
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
        checkBox.setAttribute("type", "radio");
        checkBox.classList.add("toDo-check");
        content.classList.add("todoContent")
        editBtn.classList.add("editBtn");
        dltBtn.classList.add("dltBtn");

        content.innerHTML = `<input type=text value="${tasks.title}" readonly>`;
        editBtn.textContent = "Edit";
        dltBtn.textContent = "Delete";

        editBtn.addEventListener("click", e => {
            const input = content.querySelector("input")
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
        card.appendChild(content)
        card.appendChild(editBtn);
        card.appendChild(dltBtn)

    });
}

function editTasks(){
    const content = document.querySelector(".todoContent");
    const editBtn = document.querySelector(".editBtn");
    storeTasks.forEach(tasks => {
        
    })
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

function priorityCheck(){

}

// ADD EVENT LISTENER //
submitBtn.addEventListener("click", pushTasks);
form.addEventListener("submit", handleForm);

window.addEventListener("load", () => {
    userName();
    displayTasks();
})