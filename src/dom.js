import todoApp from "./index";
import displayHomePage from "./home";
import displayProject from "./project";
import createForm from "./form";
import { displayForm, getFormValues } from "./form";
import { createTodoListItem, removeTodo, hideMenu } from "./project";
import { addToProjContainer } from "./home";

function hideForm() {
    let form = document.querySelector(".form form");
    form.parentElement.classList.remove("slide");
}

let localStorage = window.localStorage;
let projects = localStorage.getItem("projects");

if (projects) {
    projects = JSON.parse(projects)
} else {
    projects = todoApp.getDefaultProjects()
    localStorage.setItem("projects", JSON.stringify(projects))
}

console.log(projects);

let container = document.querySelector(".container")

let form = createForm();
document.body.appendChild(form)

displayHomePage(projects);

//local storage update
function updateLocalStorage() {
    localStorage.projects = JSON.stringify(projects);
}

//click event handler
container.addEventListener("click", (e) => {
    let classList = e.target.classList;

    if (classList.contains("project")) {
        let projName = e.target.id;
        displayProject(projects[projName], projName);
    } else if (classList.contains("add-project")) {
        let newProj = prompt("Type In project Name");
        console.log(newProj);
        if (newProj) {
            todoApp.addProject(projects, newProj);
            updateLocalStorage();
            addToProjContainer(newProj);
            console.log(projects)
        }
    } else if (classList.contains("arrow")) {
        displayHomePage(projects);
        if (document.querySelector(".form").classList.contains("slide")) {
            hideForm();
        }
    } else if (classList.contains("menu")) {

        let projNav = document.querySelector(".proj-nav");
        projNav.classList.add("scale")

    } else if (classList.contains("add-todo")) {
        displayForm();
        hideMenu();
        updateLocalStorage();
        //console.log(projects)
    } else if (classList.contains("delete")) {
        let project = document.querySelector(".container>ul");
        let li = e.target.parentElement;
        removeTodo(projects, project, li);
        updateLocalStorage();
    } else if (classList.contains("delete-proj")) {
        let projName = document.querySelector(".container>ul").id;
        todoApp.deleteProj(projects, projName);
        displayHomePage(projects);
        updateLocalStorage();
    } else if (e.target === document.querySelector("input#checkbox")) {
        let project = document.querySelector(".container>ul");
        let li = e.target.parentElement.parentElement;
        todoApp.markAsDone(projects, project.id, li.dataset.index);
        updateLocalStorage();
    }
});


//form handler
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector(".form form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let { task, dueDate, priority } = getFormValues();
        let todo = todoApp.createTodo(task, dueDate, priority);
        let todoList = document.querySelector(".container>ul");
        let project = todoList.id;
        console.log("proj", project);
        let todoListItem = createTodoListItem(
            todo, projects[project].length);
        //console.log(todoListItem);
        todoList.innerHTML += todoListItem;
        todoApp.addTodo(projects, project, todo);
        console.log("Index", projects[project]);
        updateLocalStorage();
        setTimeout(hideForm, 1000)
    })
})