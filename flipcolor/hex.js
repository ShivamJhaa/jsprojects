const hex=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]
const btn = document.getElementById("mybtn"); 
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random number
    let hexColor='#';
    for(let i=0;i<6;i++)
    {
        hexColor+=hex[getRandomNumber()];
    }

    const x= document.getElementById('main');
    x.style.backgroundColor= hexColor;
    color.textContent= hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);  
};


