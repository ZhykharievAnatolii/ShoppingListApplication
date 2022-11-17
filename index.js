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
function renderItem(text) {
    const item=document.createElement('li');
    const deleteButton=document.createElement('button');
    deleteButton.innerText='X';
    deleteButton.onclick=()=>{
        item.remove();
    };
    item.innerText=text;
    item.append(deleteButton);
    list.append(item);
}