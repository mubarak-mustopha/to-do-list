import todoApp from "./index";
import Arrow from "./images/left-arrow.png";
import DotIcon from "./images/dots.png";
import "./style.css";

//let projects = todoApp.projects;

let createHeader = (projName) => {
    let header = document.createElement("header");
    let headerContent = `<div ><img class="arrow" src=${Arrow} alt=""></div>
                <h2 class="project-name">${projName}</h2>
                <div class="proj-nav"><img class="arrow" src=${DotIcon} alt="">
                    <ul>
                        <li class="add-todo">Add To Project</li>
                        <li class="delete-proj">Delete Project</li>
                    <ul>
                </div>`;

    header.innerHTML = headerContent;
    return header;
}
let createTodoListItem = (todoObj, index) => {
    let dueDate = ((typeof todoObj.dueDate === "string") ?
        new Date(todoObj.dueDate) : todoObj.dueDate
    )//everythings turns in string with local storage

    let todoListItem = `

        <li class="to-do" data-index=${index}>
            <form>
                <input type="checkbox" name="" id="checkbox">
                <label for="">${todoObj.task}</label>
            </form>
            <div class="date">${dueDate.getFullYear()} ${dueDate.getMonth()} ${dueDate.getDate()}</div>
            <div class="delete">X</div>
        </li>

    `
    return todoListItem;
}


let removeTodo = (projects, project, todoListItem) => {
    let index = todoListItem.dataset.index;
    todoApp.deleteToDo(projects, index, project.id);
    project.removeChild(todoListItem)

}

export default function displayProject(project, projName) {
    let container = document.querySelector(".container")
    container.innerHTML = "";


    let header = createHeader(projName);
    let todoList = document.createElement("ul");
    todoList.id = projName;

    for (let index = 0; index < project.length; index++) {
        todoList.innerHTML += createTodoListItem(project[index], index);
    }


    container.appendChild(header);
    container.appendChild(todoList)
}

export { createTodoListItem, removeTodo }