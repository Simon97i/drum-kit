
function playSound(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!audio) return
    key.classList.add('playing')
    audio.play();
    setTimeout( function(){
        key.classList.remove('playing')
    },700)
   
}

window.addEventListener('keydown', playSound);