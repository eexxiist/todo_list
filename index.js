// 1. Необходимо написать расширяемый список, состоящий из li элементов.
// К данному списку возможно добавить элемент в конец, удалить последний элемент.
// Добавление элемента происходит через ввод сообщения в input, далее нажимаешь на кнопку.

// Можно добавить только до 10 элементов

import createTask from "./utils/Task.js";

const container = document.getElementById("container"),
  input = document.getElementById("input"),
  btnAdd = document.getElementById("button_add"),
  taskCount = document.getElementById("task_count"),
  error_message = document.getElementById("error_message");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask(input, container, taskCount);
  }

  input.style.border = "1px solid grey";
  error_message.innerText = "";
  error_message.style.display = "none";
});

btnAdd.addEventListener("click", () =>
  createTask(input, container, taskCount, error_message)
);

error_message.addEventListener('click', () => {
  error_message.style.display = 'none';
  input.style.border = "1px solid grey";
  error_message.innerText = "";
})
