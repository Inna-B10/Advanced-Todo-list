# Frontend Development Assignment: Todo List Implementation

## Introduction

In this assignment, you will be working on creating a simple Todo List application using JavaScript, HTML and CSS. You will be provided with a set of models and function definitions to build upon, and your task is to implement the Todo List based on these specifications. In addition you will have to wire this Todo List up to the UI by setting up event listners and writing the logic for updating the DOM whenever a change to the Todo List occurs.

The content of this repository gives you a head start with a set of files and functions signatures (logic not included), to give you some structure to start off with.

## Content

- [Introduction](#introduction)
- [Content](#content)
- [Task Description](#task-description)
  - [Data Models and Interactions](#data-models-and-interactions)
  - [Functions for interacting with the DOM](#functions-for-interacting-with-the-dom)
  - [Wiring Everything together](#wiring-everything-together)
- [Guidelines](#guidelines)
- [Submission](#submission)
- [Evaluation Criteria](#evaluation-criteria)
- [Bonus Tasks](#bonus-tasks)
  - [Intro](#intro)
  - [Hard](#hard)
  - [Extra Hard](#extra-hard)
- [Links](#links)

## Task Description

### Data Models and Interactions

We have provided you with the following definitions for the data models and methods for interacting with these. This is what defines the structure of our Todo List:

```javascript
/**
 * Examples of the Todo items
 * we will store in our Todo List
 */
const exampleTodo1 = {
  id: 0,
  title: "Feed Sharks",
  isComplete: false,
  createdAt: "3/12/23",
  updatedAt: "3/12/23",
};

const exampleTodo2 = {
  id: 12,
  title: "Dance in the moonlight",
  isComplete: false,
  createdAt: "12/12/12",
  updatedAt: "12/12/12",
};

/**
 * An example of what inputs
 * we need for creating a
 * new Todo item
 */
const exampleUserSubmitted1 = {
  title: "Mince Meat",
};

const exampleUserSubmitted2 = {
  title: "Catch Piranhas",
};

// The required set of function
// we need to have a minamal usable
// Todo List

/**
 * This function should return all of our
 * current stored Todoes
 */
function getAllTodoes() {}

/**
 * This function should take in one of our
 * user submitted objects and from
 * that create a new Todo Object which gets
 * inserted into our Todo List
 *
 * @param {{title: string}} userSubmitted
 */
function addTodo(userSubmitted) {}
```

### Functions for interacting with the DOM

You are required to implement the todo list according to the previous definitions.
In addition you need atleast the following functions for:

1. Creating the HTLM for a todo item

   ```javascript
   /**
    * This function should take in one of our
     * Todo objects and return a new
     * freshly generated HTML element
     *
     * @param {Todo} todo
     */
   function createTodoElement(todo)
   ```

   Exactly what HTML and styling you choose to apply to that HTML are entirely up to you. As a minimum it should be semantically correct and have some styling applied to look somewhat decent.

   **TIPS**

   Start by writing a static mock example in `index.html` to get a feel for how a single todo item should look, before trying to create a bunch of these with JavaScript.

   Duplicate the mockup Todo a couple of times to simplify the styling of the list itself.

2. Keeping the DOM up to date

   ```javascript
   /**
    * This function should be able to
    * take in a list of Todo objects
    * and then update the DOM to
    * display only these
    *
    * @param {Todo[]} todoes
    */
   updateDisplay(todoes);
   ```

   This function should update the display with the current list of Todos.

   **TIPS**

   To keep things simple, you should delete whatever Todo elements are already displayed and recreate them based on the passed in list of Todos.

### Wiring Everything Together

In addition to implementing the functions mentioned above, your task is to wire everything together by:

- Creating an HTML page that includes an input field for adding new Todos and a section for displaying the Todos.
- Adding necessary event listeners to the input field and any other relevant elements to handle user interactions (e.g., adding new Todos).
- Using the `TodoList` module you created to manage the list of Todos, adding new Todos, and retrieving all Todos.

## Guidelines

- Create a fork of this repository and implement the functions
- Use the initial file layout as a guide for structuring your application
- Ensure that your code is well-structured and follows best practices.
- Use meaningful variable and function names to enhance code readability.
- Test your application thoroughly to make sure it functions as expected.

## Submission

Please submit the following as part of your assignment:

1. Link to your GitHub repository
2. (Optional) Link to the Figma design files
3. (Optional) Link to the deployed site

## Evaluation Criteria

Your assignment will be evaluated based on the following criteria:

- Correct implementation of the `TodoList` functions.
- Proper rendering of Todo elements using the `createTodoElement` and `updateDisplay` functions.
- Functional user interface with event listeners for adding Todos.
- Code organization and readability.
- Documentation and explanation of your implementation choices.

Good luck with your assignment, and have fun building your Todo List application! If you have any questions or need clarification, feel free to reach out for assistance.

## Bonus Tasks

### Intro

#### Expand the TodoList Interface

For those who want to challenge themselves further, consider expanding the TodoList interface with new methods and wiring them up in your Todo List application. Here are some extensions you could try to implement:

```javascript
/**
 * Returns all completed todoes
 *
 * @returns {Todo[]}
 */
function getCompletedTodos() {}

/**
 * Returns all incomplete todoes
 *
 * @returns {Todo[]}
 */
function getIncompleteTodos() {}

/**
 * Returns all custom filtered list of todoes
 *
 * @param {?} ?
 * @returns {Todo[]}
 */
function getFilteredTodoes(?) {}
```

#### Uppgrade the user input

Instead of using a simple `<input type="text" />` and a `<button>` exchange it to use a `<form>` element instead. And instead of listening for a `click` event, listen for the [forms `submit` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) instead.

Using the `Enter` key when one of the `<form>` elements input are selected triggers the forms `submit` event. Which default action is to send the content of the form to the server your web application is hosted at. This is probably not what you want for this application. To prevent this you will have to look at how to use the `event` object which is passed to all event handlers and use the `event.preventDefault()` method to stop this default action.

```javascript
const formElement = document.querySelector("form");
formElement.addEventListner("submit", (submitEvent) => {
  submitEvent.preventDefault(); // Default action prevented
  // Rest of your logic
});
```

**TIPS**

- [MDN <form> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- Look at [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData), which is an easier way of interacting with all the values contained in the input fields of a form.

### Hard

#### Add more interactivity

Another set of slightly harder methods that can be implemented. These require you to somehow add event listners to the HTLM elments that you create and have them call these functions (there are other options here, but that's probably the simplest).

```javascript
/**
 * Marks a todo as completed
 *
 * @returns {void}
 */
function markTodoComplete(todoId: number) {}

/**
 * Deletes a specific todo
 *
 * @returns {void}
 */
function deleteTodo(todoId: number) {}

/**
 * Updates the title of a todo
 *
 * @returns {void}
 */
function updateTodoTitle(todoId: number, newTitle: string) {}
```

### Extra Hard

#### Plan for unknown future extensions

A nice addition which would simplify using our Todo List would be to implement something similar to the addEventListner method that is part of the browser. See if you can figure out how these should work.

```javascript
/**
 * Can be used to register a function
 * which will be called everytime the underlying
 * todo list changes
 *
 * @param {(todoes: Todo[]) => void} listner
 */
function addChangeListner(listner) {}

/**
 * Removes a registered listner, so it's no longer
 * called when the underlying todo list changes
 *
 * @param {(todoes: Todo[]) => void} listner
 */
function removeChangeListner(listner) {}
```

<details>
<summary>Example Usage</summary>

- Setup the update display to be run everytime the todolist changes

  ```javascript
  todoList.addChangeListner((todoes) => console.log(todoes));

  // These should log the current content of
  // the todo list to the console
  todoList.addTodo({ title: "Hello World" });
  todoList.addTodo({ title: "hello World" });
  ```

- Setup a new function for persisting the Todo List to [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) whenever it changes

  ```javascript
  todoList.addChangeListner((todoes) => {
    const serializedTodoes = JSON.stringify(todoes);
    localStorage.setItem("todolist", serializedTodoes);
  });

  // Now whenever you mutate (edit) the todo list
  // It should be reflected in the browsers local storage
  todoList.addTodo({ title: "Hello World" });
  todoList.addTodo({ title: "hello World" });

  // Now you just need to figure out how to
  // load the stored data on startup...
  ```

</details>

You need to do some research for how to implement this. [Hint](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)

## Links

- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- DOM Manipulations
  - [Find Single Element](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  - [Find All Elements](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
  - [Create Element](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - [Remove Element](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)
- [JSDoc](https://jsdoc.app/)
