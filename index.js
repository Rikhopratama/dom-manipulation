/**
 * Handle Submit Function
 * @param {string, number}
 *
 */
function handleSubmit(e) {
    e.preventDefault();
    const todoForm = document.getElementById('todoInput');

    if(!todoForm.value) {
        todoForm.style = 'border: 1px solid red;';
        window.alert('Field harus diisi!');
        return;
    }

    addNewList(todoForm.value);
    todoForm.style = '';
    todoForm.value = '';
    
}

function addNewList(value) {
    const todoListTableBody = document.getElementById('tableTodoList');
    const id = `row${value}`;
   
    let newRow = todoListTableBody.insertRow()
    newRow.id = id;
    
    let textCellNode = newRow.insertCell();
    let textCell = document.createTextNode(value);
    textCellNode.appendChild(textCell);

    let buttonCell = newRow.insertCell();
    let buttonEl = document.createElement('button');
    let buttonText = document.createTextNode('Delete');
    buttonEl.className = 'btn btn-danger';
    buttonEl.id = `btnDelete${value}`;
    buttonEl.setAttribute('onClick', `handleDelete("${id}")`);
    buttonEl.appendChild(buttonText);
    buttonCell.appendChild(buttonEl);

    todoListTableBody.appendChild(newRow);
}

/**
 * Handle Delete Function 
 * @param {string} value 
 */

function handleDelete(value) {
    const todoList = document.getElementById(value);
    todoList.remove();
}