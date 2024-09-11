// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert('Please enter a task.');
        return;
    }

    // Check for duplicate tasks
    const tasks = [...taskList.children].map(task => task.firstChild.textContent.toLowerCase());
    if (tasks.includes(taskText.toLowerCase())) {
        alert('Task already exists.');
        return;
    }

    // Create a new task element
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">Delete</button>`;

    // Append the task element to the list
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = '';
}

// Function to search tasks
function searchTasks() {
    const searchTerm = searchInput.value.toLowerCase();
    [...taskList.children].forEach(task => {
        const taskText = task.firstChild.textContent.toLowerCase();
        task.style.display = taskText.includes(searchTerm) ? 'flex' : 'none';
    });
}

// Add event listeners
addTaskButton.addEventListener('click', addTask);
searchInput.addEventListener('input', searchTasks);
taskInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') addTask();
});
