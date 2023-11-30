import taskCounter from "./Count.js";

function createTask(input, container, taskCount) {
  if (
    input.value.length &&
    /^[ёa-z0-9а-я\s]{5,30}$/i.test(input.value) &&
    container.childNodes.length < 9 &&
    !Array.from(container.childNodes)
      .map((el) => el.children[1].innerText)
      .some((el) => el === input.value)
  ) {
    const newLabel = document.createElement("label"),
      deleteButtonItem = document.createElement("button"),
      checkBox = document.createElement("input"),
      textContainer = document.createElement("div");

    // Checkbox insert
    checkBox.type = "checkbox";
    checkBox.classList.add("todo__state");
    newLabel.appendChild(checkBox);

    // Text insert
    textContainer.classList.add("todo__text");
    textContainer.textContent = input.value;
    newLabel.appendChild(textContainer);

    // Delete insert
    deleteButtonItem.innerText = "x";
    deleteButtonItem.classList.add("list-item_button");
    newLabel.appendChild(deleteButtonItem);

    newLabel.classList.add("todo");

    deleteButtonItem.addEventListener("click", () => {
      container.removeChild(newLabel);
      taskCounter(taskCount);
    });

    checkBox.addEventListener("click", () => {
      taskCounter(taskCount);
    });

    checkBox.onchange = () => {
      if (checkBox.checked) {
        newLabel.style.backgroundColor = "#99DF90";
      } else {
        newLabel.style.backgroundColor = "#DACCE2";
      }
    };

    container.appendChild(newLabel);
    input.value = "";
    taskCounter(taskCount);

    input.style.border = "1px solid grey";
    error_message.innerText = '';
    error_message.style.display = 'none';
  } else {
    input.style.border = "1px solid red";

    if(!input.value.length){
        error_message.style.display = 'block';
        error_message.innerText = "Вы ввели пустое значение!";
    }

    if(!(/^[ёa-z0-9а-я\s]{5,30}$/i.test(input.value))){
        error_message.style.display = 'block';
        error_message.innerText = "Вы ввели меньше 5 символов или специальные знаки!";
    }

    if(!(container.childNodes.length < 9)){
        error_message.style.display = 'block';
        error_message.innerText = "Вы ввели много задач!";
    }

    if(Array.from(container.childNodes)
    .map((el) => el.children[1].innerText)
    .some((el) => el === input.value)){
        error_message.style.display = 'block';
        error_message.innerText = "Такая задача уже есть!";
    }

  }
}

export default createTask;
