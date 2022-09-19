let toDoStorage = [];

class toDo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const newTodo = new toDo("titre", "descriptif", "19.09.22", "maximum");
console.log(newTodo);

const storeToDo = (() => {
    toDoStorage.push(newTodo)
})()

console.log(toDoStorage[0])