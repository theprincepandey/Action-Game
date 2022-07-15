score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 100);
window.addEventListener('keydown', e => {
    switch (e.key) {
        case "ArrowUp":
            dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
        case "ArrowRight":
            dino = document.querySelector('.dino');
            dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = dinox + 112 + "px";
            break;
        case "ArrowLeft":
            dino = document.querySelector('.dino');
            dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = (dinox - 112) + "px";
            break;
    }
})
setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 93 && offsetY < 52) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if(offsetX<80 && cross){
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + 's';
            console.log('new aniamtion duration', newdur);
        }, 500);
    }
}, 100);
function updatescore(score) {
    scorecont.innerHTML = "Your score" + score;
}
