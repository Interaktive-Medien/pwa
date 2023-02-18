// JavaScript für hut.html

let kameraButton = document.querySelector("#kameraButton");

kameraButton.addEventListener('click', kameraAnzeigen);


function kameraAnzeigen() {
  //console.log("Funktion kameraAnzeigen wird aufgerufen");

  // Code von https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  navigator.mediaDevices.getUserMedia({

    video: {
      facingMode: "user" // Für Rückkamera 'environment' statt 'user'
    }

  })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })
  .catch((err) => {
    console.error(`${err.name}: ${err.message}`);
  });

}
