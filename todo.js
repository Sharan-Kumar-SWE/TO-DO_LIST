const todoLists = JSON.parse(localStorage.getItem("todo-list")) || [
  { name: "", dueDate: "" },
];

displayTodo();

function displayTodo() {
  let todoListHtml = "";

  for (i = 0; i < todoLists.length; i++) {
    todoItems = todoLists[i];
    const { name, dueDate } = todoItems;
    html = `<p>${name}</p><p>${dueDate}</p><button class='delete-button' onclick='
        todoLists.splice(${i},1);
        displayTodo()
        '
        >Delete</button>
        `;
    todoListHtml += `${html}`;
  }
  console.log(todoListHtml);
  document.querySelector(".display-todo-items").innerHTML = todoListHtml;
  saveTodo();
}

function addTodo() {
  let nameElem = document.querySelector(".todo-name-input");
  name = nameElem.value;
  let dateElem = document.querySelector(".todo-date-input");
  dueDate = dateElem.value;
  //  console.log(name,dueDate)
  todoLists.push({ name: name, dueDate: dueDate });

  nameElem.value = "";
  dateElem.value = "";
  displayTodo();
  saveTodo();
}

function saveTodo() {
  localStorage.setItem("todo-list", JSON.stringify(todoLists));
}
