const btn1 = document.getElementById('modal-btn');
const btn2= document.getElementById('close-btn');
const nav= document.getElementsByClassName('modal-overlay')[0];

btn1.addEventListener('click',function(){
       nav.classList.toggle('open-modal');
})

btn2.addEventListener('click',()=>{
    nav.classList.toggle('open-modal');
})