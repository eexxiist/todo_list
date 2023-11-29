// 1. Необходимо написать расширяемый список, состоящий из li элементов.
// К данному списку возможно добавить элемент в конец, удалить последний элемент.
// Добавление элемента происходит через ввод сообщения в input, далее нажимаешь на кнопку.

// Можно добавить только до 10 элементов

const container = document.getElementById("container"),
  input = document.getElementById("input"),
  btnAdd = document.getElementById("button_add"),
  btnDelete = document.getElementById("button_delete"),
  taskCount = document.getElementById("task_count");

function taskCounter() {
  let checkedBoxes = document.querySelectorAll(".todo__state");

  let checkedCount = Array.from(checkedBoxes).reduce((acc, item) => {
      if (item.checked) {
        return acc + 1;
      }

      return acc;
    }, 0),
    uncheckedCount = Array.from(checkedBoxes).length - checkedCount;

  taskCount.innerText = `${checkedCount} задач выполнено и ${uncheckedCount} осталось`;
}



btnAdd.addEventListener("click", () => {
  if (
    input.value.length &&
    /^[a-zA-Z0-9А-Яа-я]{5,10}$/i.test(input.value) &&
    container.childNodes.length < 9
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
      taskCounter();
    });

    checkBox.addEventListener("click", () => {
      taskCounter();
      if(checkBox.checked){
        newLabel.classList.add("todo_checked");
      }else{
        newLabel.classList.add("todo");
      }
    });
    

    
    container.appendChild(newLabel);
    taskCounter();
  }
});