//local reviews
const reviews = [
    {
        id:1,
        name:"Sara Jhones",
        job:"UX DESIGNER",
        img:"cobra.png",
        text:"A dedicated worker, self-starter, team player and multi-tasker pursuing B.Tech(CSE) from Amity University, app developer, dancer, actress and programmer with grasp of Java, Python, Linux and DBMS.",
    },
    {
        id:2,
        name:"Shivam Jha",
        job:"Web Developer",
        img:"shivam.jpg",
        text:"A dedicated worker, self-starter, team player and multi-tasker pursuing B.Tech(CSE) from Indian Institute of Information Technology, app developer and programmer with grasp of Java, Python, Linux and DBMS.",
    },
    {
        id:3,
        name:"Dakota Johnson",
        job:"ML Enthusiats",
        img:"11.jpg",
        text:"A dedicated worker, self-starter, team player and multi-tasker pursuing B.Tech(CSE) from Harvrad University, app developer,security expert and programmer with grasp of Java, Python, Linux and DBMS.",
    },
    {
        id:4,
        name:"Tripti Pal",
        job:"Data Scientist",
        img:"tripti.jpeg",
        text:"A dedicated worker, self-starter, team player and multi-tasker pursuing B.Tech(CSE) from Galgotia University, app developer, AI-ML enthusiasts and programmer with grasp of Java, Python, Linux and DBMS.",
    }
    
];
const img = document.getElementById('person-img');
const job = document.getElementById('job');
const author = document.getElementById('author');
const info = document.getElementById('info');

const prevBtn = document.querySelector('#btn4');
const nextBtn = document.querySelector('#btn2');
const randBtn = document.querySelector('#btn3');

let currentItem=0;

window.addEventListener("DOMContentLoaded",function(){
    showFn(currentItem);
});

function showFn(){
    const item = reviews[currentItem];
    img.src = item.img;;
    job.textContent=item.job;
    info.textContent=item.text;
    author.textContent=item.name;
};
function isCorrectIndex(no){
    if (no<0)
    return 3;
    else if (no>3)
    return 0;
    else 
    return no;
}

prevBtn.addEventListener('click',function(){
    currentItem-=1;
    const no=isCorrectIndex(currentItem);
    currentItem=no;
    showFn();
    
});
nextBtn.addEventListener('click',function(){
    currentItem+=1;
    const no=isCorrectIndex(currentItem);
    currentItem=no;
    showFn();
    
});
randBtn.addEventListener('click',function(){
    currentItem=getRandomNo();
    showFn();
    
});
function getRandomNo(){
    return Math.floor(Math.random() * reviews.length);
};