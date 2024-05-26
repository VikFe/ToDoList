// - Находим необходимые элементы DOM и записываем в переменные
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
// - Создаем функцию `**createTask()**`. Внутри функции:
function createTask() {
    const taskText = taskInput.value
//     - Создаем новый элемент списка с помощью метода (**`createElement`)**
const newTask = document.createElement('li');
//     - Присваиваем текст из поля ввода в качестве содержимого новой задачи (**`textContent`**)
newTask.textContent = taskText;
//     - Добавляем новую задачу в список с помощью метода (**`append`**)
taskList.append(newTask);
//     - Очищаем поле ввода
taskInput.value = '';
}
// - Создаем функцию `**checkTask()**`. Внутри функции:
function checkTask(event) {

    if (event.target.tagName.toLowerCase() === 'li') {
        event.target.classList.toggle('completed');
    }
}


// - Добавляем функцию-обработчик к событию клика на кнопку (**`addEventListener`)**
addButton.addEventListener('click', createTask);

// - Добавляем функцию-обработчик к событию клика на список задач (**`addEventListener`)**
taskList.addEventListener('click', checkTask);
