import Check from "./images/check.png";
import "./style.css";

let createFormContent = () => {
    let form = `
    <h3>New Task</h3>
    <form action="">
        <div class="form-row">
            <label for="task">What is to be done?</label>
            <input type="text" name="" id="task">
        </div>
        <div class="form-row">
            <label for="date">Date?</label>
            <input type="date" name="" id="date">
        </div>

        <div class="form-row">
            <label for="time">Time</label>
            <input type="time" name="" id="time">
        </div>
        <div class="form-row">
            <label for="priority">Priority</label>
            <input type="number" name="" id="priority">
        </div>
        <button type="submit"><img src=${Check} alt=""></button>
    </form>
` ;
    return form
}

export default function createForm() {
    let formDiv = document.createElement("div")
    formDiv.classList.add("form");
    formDiv.innerHTML = createFormContent();

    return formDiv;
}

let displayForm = () => {
    let formDiv = document.querySelector(".form");
    formDiv.classList.add("slide")
}

let getFormValues = () => {
    let task = document.querySelector("input[id='task']").value;
    let date = document.querySelector("input[id='date']").value;
    let time = document.querySelector("input[id='time']").value;
    let priority = document.querySelector("input[id='priority']").value;
    let dueDate = new Date(date);
    return { task, dueDate, priority }
}

export { displayForm, getFormValues };