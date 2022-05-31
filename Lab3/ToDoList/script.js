let addbtn = document.querySelector('.but');
let items = document.querySelector('.items');
let input = document.querySelector('.new-task-input');

addbtn.addEventListener('click', function(){
    // console.log(input.value);
    const txt = input.value.trim();
    input.value = "";
    if(txt == "") return;
    addElement(txt);
    saveChanges();
} );

window.onload = function() {
  let items = JSON.parse(localStorage.getItem('data-list'));
  if(items) {
      items.forEach(item => addElement(item.text, item.checked));
  }
};

function addElement(txt, checked=false){
    const taskTxt = document.createElement('span');
    taskTxt.textContent = txt;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = checked;
    checkbox.addEventListener('click', changeDecoration);

    const del = document.createElement('img');
    del.src = 'bin.jpg';
    del.addEventListener('click', function() {
        this.parentNode.remove();
        saveChanges();
    })

    const task = document.createElement('div');
    task.className = 'item' + (checked ? ' checked' : '');
    task.appendChild(checkbox);
    task.appendChild(taskTxt);
    task.appendChild(del);

    items.appendChild(task);
}

function changeDecoration() {
    this.parentNode.classList.toggle('checked');
    items.appendChild(this.parentNode);
    saveChanges();
}

function saveChanges(){
    let datalist = []
    items.childNodes.forEach(node => {
        let checked = (node.querySelector('input') || {}).checked;
        let text = (node.querySelector('span') || {}).textContent;
        if(checked === undefined || !text) return;
        datalist.push({
            checked,
            text
        });
    });

}