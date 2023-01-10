class Todo {
    constructor(task, dueDate, priority) {
        this.task = task
        this.dueDate = dueDate
        this.isChecked = false;
        this.priority = priority
    }
    check() {
        this.isChecked = true;
    }
    uncheck() {
        this.isChecked = false;
    }
}

let projects = {
    personal: [],
    work: [],
    grocery: [],
}

let addProject = (projects, projName) => {
    projects[projName] = [];
}

let addTodo = (projects, project, toDoObj) => {
    projects[project].push(toDoObj);
    console.log(projects[project]);
}

let createTodo = (task, dueDate, priority) => new Todo(task, dueDate, priority);

let markAsDone = (projects, project, toDoIndex) => {
    projects[project][toDoIndex].check();
}

let deleteToDo = (projects, toDoIndex, project) => {
    projects[project].splice(toDoIndex, 1)
}

let replaceTodo = (newToDo, project, toDoIndex) => {
    projects[project][toDoIndex] = newToDo;
}

let editTodo = (newToDo, project, toDoIndex) => {
    replaceTodo(newToDo, project, toDoIndex);
}

let deleteProj = (projects, projName) => {
    delete projects[projName];
}

let getDefaultProjects = () => projects;

//addProject("school");
//addProject("relationship");
let read = createTodo("read", new Date("2023-02-11"), 5);
let stayHalal = createTodo("stayHalal", new Date(), 10)
let keepItReal = createTodo("Never cheate", new Date(), 5)

//addTodo("school", read);
//addTodo("relationship", stayHalal);
//addTodo("relationship", keepItReal);

//markAsDone("school", 0)
//deleteToDo(0, "relationship")
//editTodo(createTodo("study", new Date("2023-02-11"), 5), "school", 0)

//console.log(projects.school);
//console.log(projects.relationship);
let todoApp = {
    getDefaultProjects, addProject, addTodo, createTodo, markAsDone
    , deleteToDo, editTodo, deleteProj
}

export default todoApp;