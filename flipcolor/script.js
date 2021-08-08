colors =["green","pink","#e67e22","blue","skyblue","yellow","red","gold"];
const btn = document.getElementById("mybtn"); 
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random number
    const randomNumber= getRandomNumber();
    const x= document.getElementById('main');
    x.style.backgroundColor= colors[randomNumber];
    color.textContent= colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)  
};


