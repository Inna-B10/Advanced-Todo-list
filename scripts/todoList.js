/**
 * When working with data we need to have
 * an idea of how our data is structured
 *
 * These are the shapes our little todo
 * api is cocerned with
 */

import { createUniqueId } from "./utilities.js";

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
  const createdTime = new Intl.DateTimeFormat("no-NO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const newTask = {
    id: createUniqueId(),
    title: data.title,
    createdAt: createdTime,
  };
  let allTodoes = getAllTodoes();
  allTodoes.push(newTask);

  allTodoes = JSON.stringify(allTodoes);
  localStorage.setItem("TodoList", allTodoes);
}
