/**
 * When working with data we need to have
 * an idea of how our data is structured
 *
 * These are the shapes our little todo
 * api is cocerned with
 */

import { timeStamp } from "./utilities.js";

/**
 * A single Todo item we will
 * store.
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
 * This is the object
 * that our users will give
 * us for creating a new todo entry
 *
 * @typedef {{
 * title: string,
 * }} TodoCreationInfo
 */

/**
 * This array will store all of our todoes
 *
 * @type {Todo[]}
 */

/* ---------------- Check If Todo List Exist In Local Storage --------------- */
const oldTodoes = JSON.parse(localStorage.getItem("TodoList"));
const todoes = oldTodoes ? oldTodoes : [];

/**
 * Returns all the Todoes in a list
 *
 * @returns {Todo[]}
 */
export function getAllTodoes() {
  return todoes;
}

/**
 * Creates a new Todo based on the passed
 * in data
 *
 * @param {TodoCreationInfo} data
 */
export function addTodo(data) {
  let allTodoes = getAllTodoes();
  /* ------------------------------ Create New Id ----------------------------- */
  let newId = 0;
  if (allTodoes.length !== 0) {
    const lastElement = allTodoes.slice(-1);
    newId = lastElement[0].id + 1;
  }

  /* ------------------------ Create And Add New Object ----------------------- */
  const newTask = {
    id: newId,
    title: data.title,
    isComplete: false,
    createdAt: timeStamp(),
    editedAt: "",
  };
  allTodoes.push(newTask);

  /* ------------------- Save Todo List In The LocalStorage -------------------- */
  allTodoes = JSON.stringify(allTodoes);
  localStorage.setItem("TodoList", allTodoes);
  return;
}
