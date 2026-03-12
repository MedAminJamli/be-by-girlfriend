const messages = [
    "Sure 😢",
    "Ya Eya yahdik...",
    "Metaakda ?",
    "Zid khamem 🥺",
    "Ya benti chbik...",
    "Zeyda raw!",
    "Rabi yahdik 😭"
];

let messageIndex = 0;

const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

let currentFontSize = 16;
let currentPaddingVer = 12;
let currentPaddingHor = 28;

noBtn.addEventListener('click', () => {
    noBtn.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    currentFontSize *= 1.5;
    currentPaddingVer *= 1.4;
    currentPaddingHor *= 1.4;

    yesBtn.style.fontSize = `${currentFontSize}px`;
    yesBtn.style.padding = `${currentPaddingVer}px ${currentPaddingHor}px`;
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'success.html';
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 4 + 3 + 's';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    document.getElementById('background-hearts').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 800);
