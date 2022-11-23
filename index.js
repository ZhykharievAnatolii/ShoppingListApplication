"use strict"
// const list=document.querySelector('ul');
// const input=document.querySelector('input');
// const button=document.querySelector('button');
// button.onclick=()=>{
//     const value=input.value;
//     renderItem(value);
//     input.value='';
// }
// function renderItem(text) {
//     const item=document.createElement('li');
//     item.innerText=text;
//     list.append(item);
// }
const list=document.querySelector('ul');
const input=document.querySelector('input');
const button=document.querySelector('button');

button.onclick=()=>{
    const value=input.value;
    renderItem(value);
    input.value='';
}
// function renderItem(text) {
//     const item=document.createElement('li');
//     const deleteButton=document.createElement('button');
//     deleteButton.innerText='X';
//     deleteButton.onclick=()=>{
//         item.remove();
//     };
//     item.innerText=text;
//     item.append(deleteButton);
//     list.append(item);
// }
const renderItem = (text) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'X';
    item.innerText = text;
    // deleteButton.dataset.type='remove'
    item.append(button);
    button.onclick = () => {
        item.remove();
    };
    item.onmousedown = () => {
        item.classList.add('red');
    };

    item.onmouseup = () => {
        item.classList.remove('red');
    }
    list.append(item);
};
// names.forEach(renderItem);
//
// document.body.onclick=(event)=>{
// const elem=event.target;
// }
const header= document.querySelector('header');
document.addEventListener(()=>{
        const{scrolY}=window;
        console.log(scrolY);
        if(scrolY===0){
            header.classList.remove('scrolled')
        }
        else{
            header.classList.add('scrolled')
        }
    }
);
const form = document.querySelector('form');
localStorage.data = localStorage.data ? localStorage.data : '[]';
const data = JSON.parse(localStorage.data);

data.forEach((user) => {
    renderItem(user);
});

form.addEventListener('submit', createItemHandler);

form.addEventListener('change', ({ target: input }) => {
    validateInput(input);
});