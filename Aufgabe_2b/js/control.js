// JavaScript für index.html

//Fetch-Funktion 
fetch('extern/kleider.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Aufruf der kleiderAnzeigen() -Funktion, die weiter unten definiert ist.
    // Wir geben der Funktion data als Parameter mit
    kleiderAnzeigen(data);
  })
  .catch(function(error) {
    console.log('Error: ' + error.message);
  });


// Die Funktion kleiderAnzeigen(kleiderParam)
function kleiderAnzeigen(kleiderParam){
  for(let i = 0; i < kleiderParam.length; i++){
    //console.log(kleiderParam);
    let htmlContainer = document.querySelector("#kleiderContainer");
    let articleErstellen = document.createElement("article");
    htmlContainer.appendChild(articleErstellen);

    let imgErstellen = document.createElement("img");
    imgErstellen.src = "img/" + kleiderParam[i].bild;
    imgErstellen.alt = kleiderParam[i].name;
    articleErstellen.appendChild(imgErstellen);

    let h2Erstellen = document.createElement("h2");
    h2Erstellen.innerHTML = kleiderParam[i].name;
    articleErstellen.appendChild(h2Erstellen);
  }
}
