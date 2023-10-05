let joker = ["What do a boyfriend and mascara have in common? They both run at the first sight of emotion. Come on, you can do better, Mr. Insensitivity!",
"What’s the difference between a boyfriend and a condom? Condoms have changed, they’re no longer thick and insensitive. Take a hint, mister!",
"Sometimes I look at you and think… Damn, you’re one lucky bastard!",
"Sometimes I wonder how you put up with me. Then I remember I put up with you as well. So I guess we’re even.",
"I love you with all my butt. I would say my heart, but it’s just not as big.",
"Just a reminder: never laugh at your girlfriend’s choices. You’re one of them.",
"I call you king, not as a term of endearment. More as a reminder that I’m your queen.",
"Hey sweetcakes, life is too short to be sad over some loser guy. So, if you can’t laugh at yourself, call me. I’ll be more than happy to laugh at you!",
"Hey dude, I guess we’ll be friends forever. You know why? Because we’re both too lazy to find new pals.",
"You know, we’ve been friends for so long I can’t remember which one of us started to be the bad influence!",
"Is your name Google? Because you’ve got everything I’m searching for.",
"Have you ever been to another planet? (no?) Wow, we have so much in common!",
"Your father must be a gangster because you are like dynamite.",
"Let’s make a deal! (what?). I kiss you and if you don’t like it you can return it.",
"Why is it so difficult to find men who are caring, sensitive, and good-looking? They already have boyfriends.",
"Are you a magician? Because whenever I look at you, everyone else disappears!",
"Your lips look lonely. Would they like to meet mine?",
"If you were an Apple phone, you would be called iGorgeous.",
"I saw a driver texting and driving. It made me so mad I threw my beer at him."
]

let displayJoke = document.getElementById("joke");
let btn = document.getElementById("jokeButton");
btn.addEventListener("click", function(){
    let joking = Math.floor (Math.random()*(joker.length));
    displayJoke.innerHTML = joker[joking];
})