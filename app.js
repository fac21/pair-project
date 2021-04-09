const key = document.querySelectorAll('.key')

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!audio) return; //stop function running altogether
    audio.currentTime = 0; //rewind to the start
    audio.play()
    key.classList.add('playing')
  })

  keys.forEach(x => x.addEventListener('transitionend', () => {
    x.classList.remove('playing')
  }))

  