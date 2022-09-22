import { storeTasks } from ".";
import { displayTasks } from "./display";

const selectSort = document.getElementById("sortTodo");

export function date(a, b){
    if (a.dueDate < b.dueDate){
        return -1;
    }
    if (a.dueDate > b.dueDate){
        return 1;
    }
    return 0;

}

export function alphabetic(a, b){
    if (a.title < b.title){
        return -1;
    }
    if (a.title > b.title){
        return 1;
    }
    return 0;
}

export function isDone(a){
    if (a.done === true){
        return -1;
    }
    if (!a.done){
        return 1
    }
    date()
    return 0
}

export function notDone(a){
    if (!a.done){
        return -1
    }
    if (a.done === true){
        return 1;
    }
    
    date()
    return 0
}

export function highCheck(a, b){
    if (a.priority > b.priority){
        return -1;
    }
    if(a.priority < b.priority){
        return 1;
    }

    return 0;
}

export function lowCheck(a, b){
    if (a.priority < b.priority){
        return -1;
    }
    if(a.priority > b.priority){
        return 1;
    }

    return 0;
}

selectSort.addEventListener("change", (event) => {
    if (event.target.value === "0"){
        storeTasks.sort(date);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
    if (event.target.value === "1"){
        storeTasks.sort(alphabetic);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
    if (event.target.value === "2"){
        storeTasks.sort(isDone);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
    if (event.target.value === "3"){
        storeTasks.sort(notDone);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
    if (event.target.value === "4"){
        storeTasks.sort(highCheck);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
    if (event.target.value === "5"){
        storeTasks.sort(lowCheck);
        localStorage.setItem('storeTasks', JSON.stringify(storeTasks));
        displayTasks();
    }
})