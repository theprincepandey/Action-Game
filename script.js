document.onkeydown = function (e) {
    console.log( e.key);
    if (e.key == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
}
// window.addEventListener("keydown", function (event) {
//     const p = document.createElement("p");
//     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
//     document.getElementById("output").appendChild(p);
//     window.scrollTo(0, document.body.scrollHeight);
//     if (key == 'ArrowUp') {
//         dino = document.querySelector('.dino');
//         dino.classList.add('animateDino');
//         setTimeout(() => {
//             dino.classList.remove('animateDino')
//         }, 700);
//     }
// }, true);
