function taskCounter(taskCount) {
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

export default taskCounter;
