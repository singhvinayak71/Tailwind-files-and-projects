// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center p-2 border-b';

        const span = document.createElement('span');
        span.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'text-red-500';
        removeButton.onclick = function () {
            li.remove();
        };

        li.appendChild(span);
        li.appendChild(removeButton);

        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}