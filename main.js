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

// What elements do we need?

/**
 * Contains the logic for what should happen
 * when a user presses the submit/add button
 */
function handleUserSubmit() {}

/**
 * Takes a list of todes and renders them to our display
 *
 * @param {Todo[]} todoes
 */
function updateDisplay(todoes) {}
// What events do we need to listen for?
// What should happen when those event occur?
