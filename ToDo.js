function getListFromStorage() {
    var todo = new Array;
    var todostring = localStorage.getItem('todo');
    // console.log(todo);
    if (todostring != null) {
        todo = JSON.parse(todostring);
    }
    return todo;
}

function add() {
    var newtask = document.getElementById('task').value;

    var prevList = getListFromStorage() || [];
    // console.log(prevList);
    prevList.push(newtask);
    // console.log(prevList);
    localStorage.setItem('todo', JSON.stringify(prevList));

    showTheList();
}

function showTheList() {
    var todoList = getListFromStorage();

    var html = '<ul>';
    for (var i = 1; i < todoList.length; ++i) {
        if(todoList[i]!='')
        html += '<li>' + todoList[i] + '<button class="remove" id="' + i  + '">x</button></li>';

    };
    html += '</ui>';
    document.getElementById('todo').innerHTML = html;

    var rem = document.getElementsByClassName('remove');
    for (var i = 0; i < rem.length; ++i) {
        rem[i].addEventListener('click', remove);
    }

}

function remove()
{
    var id = this.getAttribute('id');
    var todos = getListFromStorage();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    showTheList();

    return false;
}

document.getElementById('add').addEventListener('click', add());
showTheList();