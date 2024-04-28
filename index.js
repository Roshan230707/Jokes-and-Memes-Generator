const jokeBtn = document.getElementById('get-joke');
const memeBtn = document.getElementById('get-meme');

const jokeContainer = document.querySelector('.joke-content');
const memeContainer = document.querySelector('.meme-content');

const jokes = [
    'How come a man driving a train got struck by lightning? He was a good conductor',
    'How do you get an 80-year-old woman to yell, "CRAP!"? You get another 80-year-old woman right next to her to yell, "Bingo!"',
    'What do you call a fake noodle? An impasta!',
    "Why did the tomato blush? Because it saw the salad dressing",
    "Never trust an atom...  They make up everything!",
    "What do you call a pencil without lead?  Pointless",
    "How did Darth Vader know what Luke Skywalker was getting for Christmas? He felt his presence",
    "How does Darth Vader like his toast?  On the dark side",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "How do you make the number one disappear?  Add the letter G and it’s “gone”!"
];

const memes = ['meme 1.jpeg', "meme 2.jpg", "meme 3.jpg", 'meme 4.jpg', 'meme 5.jpeg', 'meme 6.jpg', "meme 7.jpg", "meme 8.jpg", "meme 9.jpg", "meme 10.jpeg"];

let joke;
let meme;
const generateJoke = () => {
    joke = jokes[Math.floor(Math.random() * jokes.length)];

    jokeContainer.innerHTML = joke;
};
const generateMeme = () => {
    meme = memes[Math.floor(Math.random() * memes.length)];
    const newMeme = document.createElement('img');
    newMeme.setAttribute('src', meme);
    newMeme.style.maxWidth = "600px";
    memeContainer.innerHTML = '';
    memeContainer.appendChild(newMeme);
};

jokeBtn.addEventListener('click', generateJoke);
memeBtn.addEventListener('click', generateMeme);