let tasks = [];

const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function crudonTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(index);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function addTasks(event) {
    event.preventDefault();

    const userInput = taskInput.value.trim();
    if (userInput) {
        tasks.push(userInput);
        taskInput.value = '';
        crudonTasks();
    }
}

function editTask(index) {
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask) {
        tasks[index] = newTask;
        crudonTasks();
    }
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        crudonTasks();
    }
}


todoForm.addEventListener('submit', addTasks);

crudonTasks();
