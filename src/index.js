let toDoStore = [];

class toDo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

        return {title, description, dueDate, priority}
    }
}

(function storeToDo(){
    const newTodo = new toDo("titre", "descriptif", "19.09.22", "maximum");
    toDoStore.push(newTodo);

    displayStore();
})();

function displayStore(){
    const container = document.querySelector(".container");

    toDoStore.forEach(tasks => {
        const card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);

        for (let eachTask in tasks){
            const txt = document.createElement("p");
            txt.textContent = `${eachTask}: ${tasks[eachTask]}`;
            card.appendChild(txt);
        }
    });
}

console.log(toDoStore[0]);

