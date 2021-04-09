const key = document.querySelectorAll('.key')

window.addEventListener('keydown', function(e) {
  console.log('hi');
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!audio) return; //stop function running altogether
    audio.currentTime = 0; //rewind to the start
    
    audio.play();
    console.log(audio.currentTime);
    key.classList.add('playing');
      // Trying to stop the player if it goes above 1 second
     

  })

  window.addEventListener('keyup',function(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    setInterval(function(){
      if (audio.currentTime > 1) {
          audio.pause();
      }
    }, 0);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove('playing');
  });



