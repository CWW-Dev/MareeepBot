  var musicKeyPress = event.keyCode;
  var music = new Audio("pokepMusic.mp3")
  if (x == 77) {
    var playMusic = confirm("Would you like some music to be played?")
    if (playMusic == true) {
      music.play()
    }
    else if (playMusic == false) {
    }
  }
