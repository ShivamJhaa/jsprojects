const btn1= document.getElementById('btn1');
const btn2= document.getElementById('btn2');
const btn3= document.getElementById('btn3');
const num = document.querySelector(".num");

let count=0;

btn1.addEventListener("click", function(){
    
    count=0;
    if(count===0){
        num.style.color="white";
    }
    num.textContent= 0;
});
btn2.addEventListener("click", function(){
    count+=1;
    if(count>0){
        num.style.color="green";
    }
    if(count<0){
        num.style.color="red";
    }
    if(count===0){
        num.style.color="white";
    }
    num.textContent= count;
    
    
});
btn3.addEventListener("click", function(){
    count-=1;
    if(count>0){
        num.style.color="green";
    }
    if(count<0){
        num.style.color="red";
    }
    if(count===0){
        num.style.color="white";
    }
    num.textContent= count;
});