// Darrell Holtz 5-4-2025
'use strict';

let textBox=document.getElementById('taskInput');
let button=document.getElementById('addTaskBtn');
let taskList=document.getElementById('taskList');

button.addEventListener('click', function(){
    let taskText=textBox.value;

    if(taskText===''){
        alert('Task is required.')
    } else{
        const newListItem=document.createElement('li');
        newListItem.textContent=taskText + ' ';

        const removeButton=document.createElement('button');
        removeButton.textContent='Remove';
        removeButton.addEventListener('click', function(e){
            e.currentTarget.parentNode.remove();
        });
        newListItem.appendChild(removeButton);

        taskList.appendChild(newListItem);
    }
});