const addBtn = document.querySelector('#add-btn')
const input = document.querySelector('#input-field')
const taskList = document.querySelector('#task-list')






addBtn.addEventListener('click', function () {    
    
    const newLi = document.createElement('li');
    let cancel = document.createElement('button');
    taskList.appendChild(newLi);
    newLi.textContent = input.value;
    newLi.appendChild(cancel);
    cancel.classList.add('cancel-btn')
    cancel.innerText = 'X';

    let lis = document.querySelectorAll('li')

    for (let i = 0; i < lis.length; i++) {

        cancel.addEventListener('click', function () {
            this.parentElement.remove();
        })

        lis[i].classList.add('tasks')
        
        lis[i].addEventListener('click', function () {
            this.style.textDecoration = 'line-through';
            
        })
    
    
}})








