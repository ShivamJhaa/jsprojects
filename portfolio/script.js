const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const nav = document.getElementsByClassName('nav-links')[0];

toggleBtn.addEventListener('click',()=>{
    nav.classList.toggle('active');
});

//Portfolio Section

const projects =[
    {
        id:1,
        title:"Project 1",
        img:"./img/1.png",
        head:"Assignemnt Portal & <br>Autograder",
        desc:"View on Github",
        category:"front",
        
    },
    {
        id:2,
        title:"Project 2",
        img:"./img/2.png",
        head:"Assignemnt Portal & <br>Autograder",
        desc:"View on Github",
        category:"back",
        
    },
    {
        id:3,
        title:"Project 3",
        img:"./img/3.png",
        head:"Assignemnt Portal & <br>Autograder",
        desc:"View on Github",
        category:"front",
        
    },
    {
        id:4,
        title:"Project 4",
        img:"./img/4.png",
        head:"Assignemnt Portal & <br>Autograder",
        desc:"View on Github",
        category:"front",
        
    },
    {
        id:5,
        title:"Project 5",
        img:"./img/5.png",
        head:"Assignemnt Portal & <br>Autograder",
        desc:"View on Github",
        category:"back",
        
    },
    {
        id:6,
        title:"Project 6",
        img:"./img/6.png",
        head:"Assignemnt Portal & <br>Autograder",
        desc:"View on Github",
        category:"back",
        
    },
    {
        id:7,
        title:"Project 7",
        img:"./img/1.png",
        head:"Assignemnt Portal & <br>Autograder",
        desc:"View on Github",
        category:"front",
        
    },
    {
        id:8,
        title:"Project 8",
        img:"./img/8.png",
        head:"Assignemnt Portal & <br>Autograder",
        desc:"View on Github",
        category:"front",
        
    }
    
    
];

const sectionCenter= document.getElementById('projects');

const filterBtns = document.querySelectorAll('#port-btn');

window.addEventListener('DOMContentLoaded',function(){
    displayProjects(projects);
});
filterBtns.forEach(function(btn){
    btn.addEventListener('click',function (e){
        const category = e.currentTarget.dataset.id;
        const projectsCategory = projects.filter(function(projectsItem){
            if (projectsItem.category === category){
                return projectsItem;
            }
        })
        if (category === "all"){
            displayProjects(projects);
            
        }
        else {
            displayProjects(projectsCategory);
        }
    });
});
function displayProjects(projectsItems){
    let displayProjects = projectsItems.map(function(item){
        return `
        <div class="boxp">
        <article class="proj-item">
        <img src=${item.img} id="pro-img">
        </article>
        <div class="pro-con">
        <h6 class="item-head">${item.title}</h6>
        <h5 class="item-text">${item.head}</h5>
        <h7>${item.desc}</h7>
        </div>
        </div>`;
    });
    displayProjects= displayProjects.join("");
    sectionCenter.innerHTML=displayProjects;
}

const navbar= document.getElementById("home");
const topLink= document.querySelector(".top-link");

window.addEventListener("scroll",function(){
    const scrollheight= window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollheight> navHeight){
        navbar.classList.add("fixed-nav")
    }
    else 
    {
        navbar.classList.remove("fixed-nav")
    }
    if (scrollheight>500){
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }
});
