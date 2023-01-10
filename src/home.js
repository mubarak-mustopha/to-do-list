import "./style.css";



let createCountDiv = (numTodo) => {//project name: arg
    let countDiv = document.createElement("div");
    countDiv.classList.add("count");
    countDiv.textContent = numTodo;
    return countDiv;
}

let createProjectDiv = (project, numTodo) => {//project name: arg
    let projectDiv = document.createElement("div");

    let countDiv = createCountDiv(numTodo);
    projectDiv.appendChild(countDiv);

    let projDivText = document.createElement("div");
    projDivText.textContent = project.toUpperCase();//projectname
    projectDiv.appendChild(projDivText)

    projectDiv.classList.add("project");
    projectDiv.id = project;

    return projectDiv;
}

let addToProjContainer = (project) => {//project name: arg
    let projectContainer = document.querySelector(".projects");
    let projDiv = createProjectDiv(project, 0);
    let addProjectDiv = document.querySelector(".add-project");
    projectContainer.insertBefore(projDiv, addProjectDiv);
}


export default function displayHomePage(projects) {
    let heading = document.createElement("h1");
    heading.textContent = "TO DO LIST"

    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projects");

    let addProjectDiv = document.createElement("div");
    addProjectDiv.classList.add("add-project");
    addProjectDiv.textContent = "+";
    projectContainer.appendChild(addProjectDiv);

    for (const project in projects) {
        projectContainer.insertBefore(createProjectDiv(project, projects[project].length
        ), addProjectDiv)
    }


    let container = document.querySelector(".container");
    container.innerHTML = "";

    container.appendChild(heading);
    container.appendChild(projectContainer);
    console.log(projectContainer.children);

}

export { addToProjContainer }