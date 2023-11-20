
let list = document.getElementById("todo-list");
function populateTodoList(todos) {
  //let list = document.getElementById("todo-list");
  


  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);


const todoElements=function elementStructure(task){
  //<li> tag creating
  const liItem=document.createElement('li');
  // span tag inside li
  const span=document.createElement('span');
  span.className="badge bg-primary rounded-pill";
  
  // create i tag for completed tasks
  const CompleteButtonSpan=document.createElement('i');
  CompleteButtonSpan.className="fa fa-check";
  CompleteButtonSpan.setAttribute('aria-hidden','true');
  CompleteButtonSpan.addEventListener('click',function lineThrough(){
    CompleteButtonSpan.style='textDecoration : line-through;';

  })

  // i tag for delete tasks inside span tag
  let deleteButtonSpan=document.createElement('i');
  deleteButtonSpan.className="fa fa-trash";
  deleteButtonSpan.setAttribute('aria-hidden','true');

  // append both i tags to span
  span.appendChild(CompleteButtonSpan);
  span.appendChild(deleteButtonSpan);

  liItem.appendChild(span);
  list.appendChild(liItem);

  liItem.textContent=task;
} 
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
   
  const addToDoButton=document.querySelector('form button[type="submit"]');
  const inputBox=document.querySelector('form input');
  const inputValue=inputBox.value.trim() ;
    if(inputValue.length!=0){
      let newTask={task:inputValue,completed:false}
      todos.push(newTask);
      todoElements(newTask.task);
      
      inputBox.Value='';
    }

   
}
 // adding item to list when button clicked
  const addToDoButton=document.querySelector('form button[type="submit"]');
  addToDoButton.addEventListener('click',addNewTodo);


  
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
