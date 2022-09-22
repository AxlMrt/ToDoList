import { storeTasks } from ".";

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