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

//display TodoList from local storage if exist
updateDisplay();

// What elements do we need?
const userInput = document.querySelector("#todo-text-input");
const addButton = document.querySelector("#todo-add-button");

addButton.addEventListener("click", function () {
  handleUserSubmit(userInput);
});

/**
 * Contains the logic for what should happen
 * when a user presses the submit/add button
 */
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
  updateDisplay();
  userInput.value = "";
}

/**
 * Takes a list of todes and renders them to our display
 *
 * @param {Todo[]} todoes
 */
function updateDisplay() {
  const displayList = document.querySelector("#todo-display");
  displayList.innerHTML = "";

  let array = JSON.parse(localStorage.getItem("TodoList"));
  if (array) {
    for (const todo of array) {
      const newChild = createTodoElement(todo);
      displayList.appendChild(newChild);
    }
  }
}
