const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const messageElement = document.querySelector("#message");
const todoLists = document.querySelector("#lists");

// Show Message
const showMessage = (text, status) => {
  messageElement.textContent = text;
  messageElement.classList.add(`bg-${status}`);
  setTimeout(() => {
    messageElement.textContent = "";
    messageElement.classList.remove(`bg-${status}`);
  }, 1000);
};

// delete todo
const deleteTodo = (e) => {
  const selectedTodo = e.target.parentElement.parentElement.parentElement;
  todoLists.removeChild(selectedTodo);
  showMessage("todo is deleted", `danger`);

  // const todoId = selectedTodo.id;
  let todos = getTodosFromLocalStorage();
  todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
  localStorage.setItem("mytodos", JSON.stringify(todos));
};

// create todo
const createTodo = (todoId, todoValue) => {
  const todoElement = document.createElement("li");
  todoElement.id = todoId;
  todoElement.classList.add("li-style");
  todoElement.innerHTML = `
    <span>${todoValue}</span>
    <span><button class="btn" id="deleteButton"><i class="fa fa-trash"></i></button></span>
  `;
  todoLists.appendChild(todoElement);

  const deleteButton = todoElement.querySelector("#deleteButton");
  deleteButton.addEventListener("click", deleteTodo);
};

// Get todos from local storages

const getTodosFromLocalStorage = () => {
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
};

// Add todo
const addTodo = (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;

  // Unique id
  const todoId = Date.now().toString();
  createTodo(todoId, todoValue);
  showMessage(`Todo is added`, `success`);

  // Local Storage
  const todos = getTodosFromLocalStorage();
  todos.push({ todoId, todoValue });
  localStorage.setItem("mytodos", JSON.stringify(todos));

  todoInput.value = "";
};

// Load todos
const loadTodos = () => {
  const todos = getTodosFromLocalStorage();
  todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
};

// Adding listener
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);
