document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('loveMessage').style.display = 'block';
    document.getElementById('loveMessage').innerText = 'Yay! 💖 You made my day!';
});
document.getElementById('noBtn').addEventListener('click', function() {
    alert('Oh no! 😢 Maybe next time?');
});
function createHearts() {
    const heartContainer = document.querySelector('.hearts');
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}
setInterval(createHearts, 1000);
