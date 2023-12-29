document.getElementById('addTaskForm').addEventListener('submit', function(e) {
	e.preventDefault();
	const newTask = document.getElementById('newTask').value;
	if (newTask === '') return;
	const taskList = document.getElementById('taskList');
	const li = document.createElement('li');
	li.innerHTML = `<span>${newTask}</span><button class="delete">Delete</button>`;
	li.addEventListener('click', function() {
		li.classList.toggle('completed');
	});
	li.querySelector('.delete').addEventListener('click', function() {
		taskList.removeChild(li);
	});
	taskList.appendChild(li);
	document.getElementById('newTask').value = '';
});

document.getElementById('clearAll').addEventListener('click', function() {
	const taskList = document.getElementById('taskList');
	taskList.innerHTML = '';
});