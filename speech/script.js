const texts = document.querySelector(".texts");

window.SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

const reco = new SpeechRecognition();

reco.interimResults = true;

let p = document.createElement("p");

reco.addEventListener("result",(e) =>{
    texts.appendChild(p);
    const text = Array.from(e.results)
        .map((result)=>result[0])
        .map((result) => result.transcript)
        .join("");

    p.innerText = text;
    if (e.results[0].isFinal){
        if (text.includes("how are you")){
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "I am fine";
            texts.appendChild(p);
        }
        if (text.includes("what is your name") || text.includes("what's your name")){
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "My name is Shivam Jha";
            texts.appendChild(p);
        }
        if (text.includes("open YouTube")){
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "Openning youtube";
            texts.appendChild(p);
            console.log("opening youtube");
            window.open("https://www.youtube.com/");
        }
        p= document.createElement("p")
    }
});

reco.addEventListener("end",()=>{
    reco.start();
});

reco.start();