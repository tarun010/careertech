function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(checkBox);
    li.appendChild(document.createTextNode(` ${taskInput.value} `));
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}
