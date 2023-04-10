const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const marioJump = () => {
    mario.classList.add('mario__jump'); 

    setTimeout(() => {
        mario.classList.remove('mario__jump')
    }, 500);
}

const loop = setInterval(() => {

    console.log(loop);

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario)
    .bottom.replace("px", "");
    

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./assets/game_over.png";
        mario.style.width = "80px";
        mario.style.marginLeft = "44px";

        clearInterval(loop);

    }

}, 10)

document.addEventListener('keydown', marioJump);