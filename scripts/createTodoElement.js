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
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make wathever HTLM you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 *
 * @param {Todo} data
 * @returns {HTMLElement}
 */

const template = `
<div>
    <h2></h2>
    <div>
        <span></span>
    </div>
</div>
`;
export function createTodoElement(data) {
  const wrapper = document.createElement("li");
  wrapper.innerHTML = template;

  const title = wrapper.querySelector("h2");
  title.innerText = data.title;

  const createdAt = wrapper.querySelector("span");
  createdAt.innerText = data.createdAt;

  return wrapper;
}
