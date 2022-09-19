let storeTasks = [];
let storeProjects = [];

class Task{
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
}

(function pushTasks(){
    const newTodo = new Task("titre", "descriptif", "19.09.22");
    storeTasks.push(newTodo);

    displayTasks();
})();

function displayTasks(){
    const container = document.querySelector(".container");

    storeTasks.forEach(tasks => {
        const card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        card.appendChild(checkBox);

        checkBox.addEventListener("change", function() {
            if (this.checked){
                storeTasks.splice(this.parentElement.getAttribute("data-index"), 1);
                this.parentElement.remove();
            }
        })
        for (let eachTask in tasks){
            const txt = document.createElement("p");
            txt.textContent = `${tasks[eachTask]}`;
            card.appendChild(txt);
        }
    });
}

console.log(storeTasks[0]);

class Project{
    constructor(projectName){
        this.projectName = projectName;
    }
}

