// global variables

const TaskInput = document.getElementById("taskInput");
const TaskList = document.getElementById("taskList");
const warningParagragh =document.querySelector('.warning')
let todoArray = [];
let counter = 0;

// function to add task

const addTask = () => {
  let task = TaskInput.value;
  if (task.trim() !== "") {
    todoArray.push({ id: counter, name: task, done: false });
  }else if(task == ""){
    warningParagragh.style.display = "block"
  }
  counter++;
  TaskInput.value = "";

  // after adding task display it on page by function displayTodoList()
  displayTodoList();
};

const displayTodoList = () => {
    let Todo = `
      <table border="1" cellspacing="0" cellpadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Done</th>
            <th>Toggle</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    for (let i = 0; i < todoArray.length; i++) {
      if (typeof todoArray[i] !== "undefined") {
        let isDone = todoArray[i].done ? "✅" : "❌";
        let style = todoArray[i].done ? "text-decoration: line-through;" : "";
  
        Todo += `
          <tr>
            <td>${todoArray[i].id}</td>
            <td style="${style}">${todoArray[i].name}</td>
            <td>${isDone}</td>
            <td><button onclick="toggle(${i})">Toggle</button></td>
            <td><button onclick="deletTask(${i})">Delete</button></td>
          </tr>
        `;
      }
    }
  
    Todo += `
        </tbody>
      </table>
    `;
  
    TaskList.innerHTML = Todo;
    console.log(todoArray);
  };
  

// function to toggle between task is done and not done
const toggle = (index) => {
  console.log(todoArray[index].done);

  if (todoArray[index].done == true)
     {
    todoArray[index].done = false;
    } 

  else if (todoArray[index].done == false)
    {
    todoArray[index].done = true;
    }
  displayTodoList();
};

// function to delete task
const deletTask = (index) => {
  if (todoArray.length >= 0) {
    todoArray.splice(index, 1);
  }

  displayTodoList();
};


