const key = document.querySelectorAll('.key')
// const secondColour = document.querySelector(".second-colour");

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    // const note = document.querySelector(".white-key")
    if(!audio) return; //stop function running altogether
    audio.currentTime = 0; //rewind to the start
    audio.play();

    // if (e.keyCode === 65 || e.keyCode === 83 || e.keyCode === 68 || 
    //     e.keyCode === 70 || e.keyCode === 71 || e.keyCode === 72 || e.keyCode === 74 || e.keyCode === 75 ) {
    // key.style.backgroundColor = "blue";
    // }

    // key.classList.toggle("secondColour");
    console.log(audio.currentTime);
    key.classList.add('playing');
    // key.forEach(k => {
    //   k.style.backgroundColor = red;
    // })
      // Trying to stop the player if it goes above 1 second
     

  })



  window.addEventListener('keyup',function(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key2 = document.querySelector(`.key[data-key='${e.keyCode}']`)

    setInterval(function(){
      if (audio.currentTime > 1) {
          audio.pause();
          key.style.backgroundColor = "white"

         
          
      }
    }, 0);

    // if  (key.style.backgroundColor = "blue") {
    //   key.style.backgroundColor = "white"
    // }

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove('playing');
  });

  



