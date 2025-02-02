const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't oysters donate to charity? Because they are shellfish.",
    "I told my computer I needed a break, and now it won't stop sending me Kit-Kats.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I threw a boomerang and now I live in constant fear.",
    "What’s orange and sounds like a parrot? A carrot.",
    "I used to play piano by ear, but now I use my hands.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "What do you call fake spaghetti? An impasta!",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "I once got into a fight with a broken pencil... it was pointless.",
    "The rotation of the earth really makes my day.",
    "How do cows stay up to date with current events? They read the moos-paper.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "I don’t trust stairs. They’re always up to something.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why was the math book sad? It had too many problems.",
    "I’m on a seafood diet. I see food, and I eat it.",
    "I’ve just written a song about tortillas; actually, it’s more of a rap.",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they’d be bagels.",
    "I’m friends with all electricians, we have good current connections.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did.",
    "Why did the bicycle fall over? It was two-tired.",
    "I’m trying to lose weight, but it’s not working out.",
    "Why was the computer cold? It left its Windows open.",
    "I don’t get why people say ‘laughter is the best medicine’. If that’s true, my doctor must be a comedian.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "I once bought a belt for my pants. It was a waist of money.",
    "How does a penguin build its house? Igloos it together!",
    "What do you get if you cross a vampire with a snowman? Frostbite.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Why don’t eggs tell jokes? They might crack up.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What’s brown and sticky? A stick.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    "Why was the belt arrested? For holding up a pair of pants.",
    "How does Moses make his coffee? Hebrews it!",
    "What’s a skeleton’s least favorite room? The living room.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    "What’s a skeleton’s least favorite room? The living room.",
    "How do cows stay up to date with current events? They read the moos-paper.",
    "I once got into a fight with a broken pencil... it was pointless.",
    "Why did the math book look sad? Because it had too many problems.",
    "I’m reading a book about anti-gravity. It’s impossible to put down!",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What do you call fake spaghetti? An impasta!",
    "Why don’t oysters donate to charity? Because they are shellfish.",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine.",
    "Why don’t skeletons ever go trick-or-treating? Because they have no body to go with.",
    "I couldn’t figure out how to put my seatbelt on. Then it clicked.",
    "Why did the coffee file a police report? It got mugged.",
    "What do you call a pile of cats? A meow-tain.",
    "Why do cows make great comedians? They’re always outstanding in their field.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "What did one wall say to the other? I'll meet you at the corner.",
    "Why did the football team go to the bank? To get their quarterback.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I wasn’t originally going to get a brain transplant, but then I changed my mind.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I started a company selling land mines disguised as prayer mats. Prophets are going through the roof.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "I couldn’t figure out how to put my seatbelt on. Then it clicked.",
    "What did the left eye say to the right eye? Between you and me, something smells.",
    "How do you organize a space party? You planet!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "What do you get when you cross an elephant and a rhinoceros? Elephino!",
    "Why was the broom late? It swept in.",
    "Why don’t oysters share their pearls? Because they’re shellfish.",
    "What do you call an alligator in a vest? An investigator.",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call a fish with no eyes? A fsh.",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What do you call fake spaghetti? An impasta!",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    "Why was the math book sad? It had too many problems.",
    "I’m trying to lose weight, but it’s not working out.",
    "How does a penguin build its house? Igloos it together!",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why was the computer cold? It left its Windows open.",
    "I don’t trust stairs. They’re always up to something.",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine."
];

const jokeButton = document.getElementById('jokeButton');
const popup = document.getElementById('popup');
const jokeText = document.getElementById('jokeText');
const closePopup = document.getElementById('closePopup');

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

jokeButton.addEventListener('click', () => {
    jokeText.textContent = getRandomJoke();
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});