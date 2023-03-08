//global variables

let list=[];
let taskId=0;

function addTask(){
    let task = document.getElementById("txtTask").value;
    list.push(task);
    displayTasks();
    document.getElementById("txtTask").value = "";
    updateNumberTasks();
}

function displayTasks()
{
    let newTask = document.getElementById("txtTask").value;
    let item =`<li id="${taskId}">${newTask} <span onclick="deleteTask(${taskId})"> Delete </span> </li>`;
    const ul = document.getElementById("taskList");
    ul.innerHTML+= item;
    taskId++;
}
function updateNumberTasks()
{
    document.getElementById("amountTasks").innerHTML = list.length;
}
function deleteTask(id){
    document.getElementById(id).remove();
    list.pop();
    updateNumberTasks();
}

function init(){
    console.log("init");
    updateNumberTasks();
}

window.onload=init;



