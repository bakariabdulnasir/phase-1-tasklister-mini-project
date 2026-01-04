document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // 1. Select the form and the container where tasks will be listed
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks'); // Adjust ID based on your HTML (usually 'tasks' or 'task-list')

  // 2. Listen for the 'submit' event
  taskForm.addEventListener('submit', (event) => {
    // STOP the page from reloading
    event.preventDefault();

    // 3. Capture the input value
    const taskInput = document.getElementById('new-task-description');
    const taskText = taskInput.value;

    // Validation: Don't add empty tasks
    if (taskText.trim() === "") return;

    // 4. Create a new DOM element for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // STRETCH: Add a delete button to each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = ' ❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    // Append the button to the list item, and list item to the list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // 5. Clear the input field for the next task
    taskForm.reset();
  });
});
