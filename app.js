let addButton = document.querySelector('#add');
let subButton = document.querySelector('#subtract');
let input = document.querySelector('input');
let display = document.querySelector('#display');


addButton.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
});

   subButton.addEventListener('click', ()=> {
    input.value = parseInt(input.value) -1;
});

function newColor(){
    addButton = addButton.style.backgroundColor ="green";
}

function backColor(){
   
}