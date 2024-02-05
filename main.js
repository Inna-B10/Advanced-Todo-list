/**
 * The shape of the Todo item
 * we stor
 *
 * @typedef {{
 * id: number,
 * title: string,
 * isComplete: boolean,
 * createdAt: Date,
 * updatedAt: Date,
 * }} Todo
 */

/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";
import { createTodoElement } from "./scripts/createTodoElement.js";
import { timeStamp } from "./scripts/utilities.js";

/* -------------- Display TodoList From Local Storage If Exist -------------- */
document.addEventListener("DOMContentLoaded", function () {
  updateDisplay("all");
});

const displayList = document.querySelector("#todo-display");
const userInput = document.querySelector("#todo-text-input");
const filterOption = document.querySelector("#selected-todoes");
const deleteAll = document.querySelector("#deleteAll");
const formElement = document.querySelector("form");
const editBtn = document.querySelector(".edit-btn");
const saveBtn = document.querySelector(".save-btn");

/* ------------------- Delete Todo List From LocalStorage ------------------- */
deleteAll.addEventListener("click", deleteDB);
function deleteDB() {
  localStorage.removeItem("TodoList");
  location.reload();
}

/* ---------------- Send Filter All, Completed Or Uncompleted --------------- */
filterOption.addEventListener("click", () => {
  updateDisplay(filterOption.value);
});

/**
 * Contains the logic for what should happen
 * when a user presses the submit/add button
 */
formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // Default action prevented

  // const formData = new FormData(formElement);
  // const values = [...formData.entries()];
  // console.log(values);

  /* ------------------------ Define Which Action To Do ----------------------- */

  const item = event.submitter;

  const idValue = item.value;

  //console.log(item);
  //  let action = "";
  //   if (item.name === "complete") {
  //     action = "complete";
  //   }
  //   if (item.name === "delete") {
  //     action = "delete";
  //   }
  //   if (item.id === "todo-add-button") {
  //     action = "add";
  //   }
  //   if (item.name ==="edit"){
  //     action = "edit"
  //   }
  let array = todoList.getAllTodoes();

  switch (item.name) {
    /* ------------------------- Todo Toggle IsCompleted ------------------------ */
    case "complete":
      for (const todo of array) {
        if (todo.id === Number(idValue)) {
          todo.isComplete === true
            ? (todo.isComplete = false)
            : (todo.isComplete = true);
          todo.editedAt = timeStamp();

          array = JSON.stringify(array);
          localStorage.setItem("TodoList", array);

          const title = item.parentElement.querySelector(".update-title-input");
          title.classList.toggle("complete");

          const button = item.parentElement.querySelector(".fa");
          button.classList.toggle("fa-check-square");
          button.classList.toggle("fa-square");

          updateDisplay("all");
        }
      }
      break;
    /* --------------------------- Delete Current Todo -------------------------- */
    case "delete":
      for (const todo of array) {
        if (todo.id === Number(idValue)) {
          array.splice(array.indexOf(todo), 1);

          array = JSON.stringify(array);
          localStorage.setItem("TodoList", array);

          item.parentElement.parentElement.remove();
        }
      }
      break;
    /* ------------------------------ Add New Todo ------------------------------ */
    case "addNewTask":
      handleUserSubmit(userInput);
      break;

    /* ---------------------------- Edit/rename Task ---------------------------- */
    case "edit":
      const inputEdit = item.previousElementSibling;
      inputEdit.disabled = false;
      inputEdit.classList.remove("update-title-input");
      inputEdit.classList.add("active-input");
      console.log(inputEdit);
      break;

    /* ------------------------- Save Task After Editing ------------------------ */
    case "save":
      break;
  }
});

//adds new todo
function handleUserSubmit(string) {
  const taskTitle = string.value;

  if (taskTitle.trim() === "") {
    alert("You need to add some task!");
    return;
  }
  const newItem = {
    title: taskTitle,
  };
  todoList.addTodo(newItem);
  updateDisplay("all");
  userInput.value = "";
}

/**
 * Takes a list of todes and renders them to our display
 *
 * @param {Todo[]} todoes
 */
function updateDisplay(filter) {
  displayList.innerHTML = "";
  let array = JSON.parse(localStorage.getItem("TodoList"));

  if (array) {
    switch (filter) {
      /* ------------------------- Display All Todo Tasks ------------------------- */
      case "all":
        for (const todo of array) {
          const newChild = createTodoElement(todo);
          displayList.appendChild(newChild);
        }
        break;

      /* ---------------------- Display Only Completed Tasks ---------------------- */
      case "completed":
        for (const todo of array) {
          if (todo.isComplete === true) {
            const newChild = createTodoElement(todo);
            displayList.appendChild(newChild);
          }
        }
        break;
      /* --------------------- Display Only Uncompleted Tasks --------------------- */
      case "uncompleted":
        for (const todo of array) {
          if (todo.isComplete === false) {
            const newChild = createTodoElement(todo);
            displayList.appendChild(newChild);
          }
        }
        break;
    }
  } else {
    /* ------------------- Message If No Task In Local Storage ------------------ */
    displayList.innerHTML =
      "<h2 class='text-center'> There are currently no tasks stored in the local storage.</h2>";
  }
}
