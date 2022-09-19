class Task{
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
}

function displayTasks(){
    const container = document.querySelector(".container");

    storeTasks.forEach(tasks => {
        const card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);

        for (let eachTask in tasks){
            const txt = document.createElement("p");
            txt.textContent = `${tasks[eachTask]}`;
            card.appendChild(txt);
        }
    });
}