const listContainer = document.getElementById("list-container");
const inputTask = document.getElementById("input-task");
const add = document.getElementById("add");


function addTask() {
    if(inputTask.value === ''){
        alert("You must write something");
    }
    else{
        let task = document.createElement("li");
        task.innerHTML= inputTask.value;
        listContainer.appendChild(task);
        inputTask.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        task.appendChild(span);
        saveData();
    }
    
}


listContainer.addEventListener(("click"),(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();