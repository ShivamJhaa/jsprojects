const text= [
    `Debbie put her hand into the hole, sliding her hand down as far as her arm could reach. She wiggled her fingers hoping to touch something, but all she felt was air. She shifted the weight of her body to try and reach an inch or two more down the hole. Her fingers still touched nothing but air.`,
    `If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite 
    enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind.
    The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number 
    of paragraphs will instantly appear.`,
    `Waiting and watching. It was all she had done for the past weeks. When you’re locked in a room with nothing but food and drink, that’s about all you can do anyway. She watched as birds flew past the window bolted shut. She couldn’t reach it if she wanted too, with that hole in the floor. She thought she could escape through it but three stories is a bit far down.`,
    `I guess we could discuss the implications of the phrase "meant to be." That is if we wanted to drown ourselves in a sea of backwardly referential semantics and other mumbo-jumbo. Maybe such a discussion would result in the determination that "meant to be" is exactly as meaningless a phrase as it seems to be, and that none of us is actually meant to be doing anything at all. But that's my existential underpants underpinnings showing. It's the way the cookie crumbles. And now I want a cookie.    `,
    `Pink ponies and purple giraffes roamed the field. Cotton candy grew from the ground as a chocolate river meandered off to the side. What looked like stones in the pasture were actually rock candy. Everything in her dream seemed to be perfect except for the fact that she had no mouth.
    `,
    `It's not his fault. I know you're going to want to, but you can't blame him. He really has no idea how it happened. I kept trying to come up with excuses I could say to mom that would keep her calm when she found out what happened, but the more I tried, the more I could see none of them would work. He was going to get her wrath and there was nothing I could say to prevent it.`,
    `Spending time at national parks can be an exciting adventure, but this wasn't the type of excitement she was hoping to experience. As she contemplated the situation she found herself in, she knew she'd gotten herself in a little more than she bargained for. It wasn't often that she found herself in a tree staring down at a pack of wolves that were looking to make her their next meal.`,
    `Do you think you're living an ordinary life? You are so mistaken it's difficult to even explain. The mere fact that you exist makes you extraordinary. The odds of you existing are less than winning the lottery, but here you are. Are you going to let this extraordinary opportunity pass?`,
    `The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over a week since their last meal and they were getting desperate. The cubs would make a good meal, but there were high risks taking on the mother Grizzly. A decision had to be made and the wrong choice could signal the end of the pack.`,
    
];
const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");


form.addEventListener('submit',function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random()*text.length);

    if (isNaN(value) || value<=0 || value>9){
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else {
        let tempText = text.slice(0,value);
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        }).join("");
        result.innerHTML=tempText;
    }
})