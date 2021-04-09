const key = document.querySelectorAll('.key')

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!audio) return; //stop function running altogether
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.style.backgroundColor = "blue";
    key.classList.add('playing');

  //When keydown, wait 1s (sound keeps playing during this time), then stop sound
  setTimeout(function(){
    audio.pause();
    if(e.keyCode === 87 || e.keyCode === 69 || 
      e.keyCode === 84 || e.keyCode === 89 || 
      e.keyCode === 85) {
        key.style.backgroundColor = "black"
    } else {
      key.style.backgroundColor = "white"
    }
  }, 1000);

})

window.addEventListener('keyup',function(e){
  // const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  // const key = document.querySelector(`.key[data-key='${e.keyCode}']`)

  key.classList.remove('playing');
});

  



