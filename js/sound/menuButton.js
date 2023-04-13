// fonction pour jouer le son
function playSound(sound) {
    var audio = new Audio();
    audio.src = sound;
    audio.play();
  }
  
  // déclaration des variables pour chaque bouton
  var button1 = document.getElementById("BM1PLAYERS");
  var button2 = document.getElementById("BM2PLAYERS");
  var button3 = document.getElementById("BMOPTIONS");
  var button4 = document.getElementById("BMCREDITS");
  
  // événement pour jouer un son quand on passe la souris sur le bouton
  button1.addEventListener("mouseover", function () {
    playSound("data:audio/mp3;base64,//uQxAAAAHgA=");
  });
  
  button2.addEventListener("mouseover", function () {
    playSound("data:audio/mp3;base64,//uQxAAAAHgA=");
  });
  
  button3.addEventListener("mouseover", function () {
    playSound("data:audio/mp3;base64,//uQxAAAAHgA=");
  });
  
  button4.addEventListener("mouseover", function () {
    playSound("data:audio/mp3;base64,//uQxAAAAHgA=");
  });
  
  // événement pour jouer un son quand on clique sur le bouton
  button1.addEventListener("click", function () {
    playSound("data:audio/mp3;base64,//uQxAAAAHgA=");
  });
  
  button2.addEventListener("click", function () {
    playSound("data:audio/mp3;base64,//uQxAAAAHgA=");
  });
  
  button3.addEventListener("click", function () {
    playSound("data:audio/mp3;base64,//uQxAAAAHgA=");
  });
  
  button4.addEventListener("click", function () {
    playSound("data:audio/mp3;base64,//uQxAAAAHgA=");
  });