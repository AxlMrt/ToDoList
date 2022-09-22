 import { storeTasks } from ".";
 
 export function displayTasks(){
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

        if(tasks.priority === "2"){
            card.classList.add("high");
        }
        if(tasks.priority === "1"){
            card.classList.add("middle");
        }
        if(tasks.priority === "0"){
            card.classList.add("low");
        }
            
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