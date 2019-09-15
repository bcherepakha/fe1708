function addTask(e) {
    e.preventDefault();
    const {value} = $taskDescription,
        newTask = new Task(value);

    $taskDescription.value = '';
    taskList.add(newTask);
}

function completeTask(e) {
    const {target} = e,
        {type, dataset: {id}, checked} = target,
        $taskContainer = target.closest('li');

    if (type !== 'checkbox' || !id) {
        return ;
    }

    taskList.completeTask(+id, checked);

    if (checked) {
        $taskContainer.classList.add('checked');
    } else {
        $taskContainer.classList.remove('checked');
    }
}

function deleteTask(e) {
    const {target} = e,
        $taskContainer = target.closest('li'),
        $checkbox = $taskContainer.querySelector('[type="checkbox"]'),
        {dataset: {id}} = $checkbox,
        taskId = +id;

    taskList.remove(taskId);
    $taskContainer.remove();
}

function filterList(e) {
    const {dataset: {type}} = e.target;

    taskList.filter(type);
}

function Task(description, completed = false, id = Date.now()) {
    this.id = id;
    this.description = description;
    this.completed = completed;
}

Task.prototype.render = function()  {
    const {id, description, completed} = this,
        $taskContainer = document.createElement('li'),
        $completed = document.createElement('input'),
        $deleteTask = document.createElement('button'),
        $description = document.createElement('span');

    $taskContainer.classList.add('task');

    if (completed) {
        $taskContainer.classList.add('checked');
    }

    $completed.dataset.id = id;
    $completed.type = 'checkbox';
    $completed.setAttribute('aria-label', 'complete task');
    $completed.checked = completed;

    $deleteTask.innerText = "Delete task";
    $deleteTask.addEventListener('click', deleteTask);

    $description.innerText = description;
    $description.classList.add('task__description');

    $taskContainer.append(
        $completed,
        $description,
        $deleteTask
    );

    return $taskContainer;
}

Task.isTask = function(task) {
    return task instanceof Object &&
        !!task.description &&
        typeof task.description === 'string' &&
        !!task.id &&
        isFinite(task.id);
}

function TaskList() {
    this.tasks = [];
}

TaskList.prototype.init = function() {
    try {
        const parsedTaskList = JSON.parse(window.localStorage.taskList);

        parsedTaskList.forEach(
            task => Task.isTask(task) && this.add(
                new Task(task.description, task.completed, task.id),
                false
            )
        );
    } catch (ex) {
        console.log('can\'t parse localStorage');
    }
}

TaskList.prototype.update = function() {
    // window.localStorage.setItem('taskList', JSON.stringify(taskList));
    window.localStorage.taskList = JSON.stringify(this.tasks);
}

TaskList.prototype.add = function(task, update = true) {
    this.tasks.push(task);

    if (update) {
        this.update();
    }

    $todoList.append(task.render());
}

TaskList.prototype.remove = function(taskId) {
    this.tasks = this.tasks.filter(function({id}) {
        return taskId !== id;
    });

    this.update();
}

TaskList.prototype.completeTask = function(taskId, completed) {
    const task = this.tasks.find(function({id}) {
        return taskId === id;
    });

    if (!task) {
        return ;
    }

    task.completed = completed;
    this.update();
}

TaskList.prototype.filter = function(filterType) {
    ['all', 'active', 'completed']
        .forEach(filterType => $todoList.classList.remove(filterType));

    $todoList.classList.add(filterType);
}

const $addTask = document.querySelector('.add-task'),
    $taskDescription = $addTask.querySelector('[name="task_name"]'),
    $todoList = document.querySelector('.todo-list'),
    $filters = document.querySelectorAll('.filter'),
    taskList = new TaskList();

$addTask.addEventListener('submit', addTask);
$todoList.addEventListener('click', completeTask);

taskList.init();

for (let i=0; i<$filters.length; i++) {
    const $filter = $filters[i];

    $filter.addEventListener('click', filterList);
}
