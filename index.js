const mario = document.querySelector('.mario'); // Atrela a const mario e pipe ao css dos mesmos
const pipe = document.querySelector('.pipe');

const marioJump = () => {
    mario.classList.add('mario__jump'); //adiciona a classe CSS e animação "mario__jump" ao mario

    setTimeout(() => {
        mario.classList.remove('mario__jump') // remove a classe "mario__jump" ao mario, no tempo de 500ms de intervalo entre as ações
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

document.addEventListener('keydown', marioJump); //adiciona evento para acionar a const/função marioJump ao clicar em qualquer tecla