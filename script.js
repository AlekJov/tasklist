//// define UI vars

const form = document.querySelector('#task-form')
const taskInput = document.querySelector('#task')
const taskList = document.querySelector('.collection')
const filter = document.querySelector('#filter')
const clearBtn = document.querySelector('.clear-tasks')


// Load all event Listeners
loadEventListeners();

function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask)
    // delete task
    taskList.addEventListener('click', deleteTask)
    // Clear tasks
    clearBtn.addEventListener('click', clearTasks)
    // filter tasks
    filter.addEventListener('keyup', filterTasks)
}


function addTask(e){
    e.preventDefault();
   
    if(taskInput.value === ''){
        alert("add a task")
    }else {
        //// Create li element

        const li = document.createElement('li');
        // Add a clas
        li.className = "collection-item";
        /// creeate text node and append to li
        li.appendChild(document.createTextNode(taskInput.value))
        //// create link element
        const link = document.createElement('a');
        /// add class to link
        link.className="delete-item secondary-content"
        /// add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(link)
        taskList.appendChild(li)

        //Clear input
        taskInput.value="";
    }   
}

function deleteTask(e){
    console.log(e)

    if(e.target.classList.contains('fa-remove')){
        e.target.parentElement.parentElement.remove()
    }
}

function clearTasks(){
    taskList.innerHTML = "";
}

function filterTasks(e){
   const text = e.target.value.toLowerCase()

   document.querySelectorAll('.collection-item').forEach((task)=>{
       const item = task.firstChild.textContent;
       if(item.toLowerCase().indexOf(text)!==-1){
           task.style.display = "block";
       }else{
        task.style.display = "none";
       }
   })
}