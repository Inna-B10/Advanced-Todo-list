/**
 * When working with data we need to have
 * an idea of how our data is structured
 *
 * These are the shapes our little todo
 * api is cocerned with
 */

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
const todoes = [];

/**
 * Returns all the Todoes in a list
 *
 * @returns {Todo[]}
 */
export function getAllTodoes() {}

/**
 * Creates a new Todo based on the passed
 * in data
 *
 * @param {TodoCreationInfo} data
 */
export function addTodo(data) {}
