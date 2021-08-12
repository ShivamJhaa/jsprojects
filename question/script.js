const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');


const questext1 = document.querySelector('.text1');
const questext2 = document.querySelector('.text2');
const questext3 = document.querySelector('.text3');

const min1 = document.querySelector('.icon1');
const min2 = document.querySelector('.icon2');
const min3 = document.querySelector('.icon3');

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');


btn1.addEventListener('click',()=>{
    questext1.classList.toggle('show-text');
    min1.classList.toggle('show-icon-minus');
    p1.classList.toggle('hide-plus-icon');
});
btn2.addEventListener('click',()=>{
    questext2.classList.toggle('show-text');
    min2.classList.toggle('show-icon-minus');
    p2.classList.toggle('hide-plus-icon');
});
btn3.addEventListener('click',()=>{
    questext3.classList.toggle('show-text');
    min3.classList.toggle('show-icon-minus');
    p3.classList.toggle('hide-plus-icon');
});
