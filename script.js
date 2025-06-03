const button = window.document.getElementById('bouton');                 // récupération du bouton

// le bouton ouvre une nouvelle fenêtre avec la page destination.html
button.addEventListener('click', () => {                    // ajout d'un écouteur d'événement pour le clic sur le bouton
    const destination = window.open('./destination.html', 'destination', // ouverture d'une nouvelle fenêtre
       'width=400, height=400, left=200, top=200');                      // avec les dimensions et la position spécifiées
    /*const popupWidth = 400;
    const popupHeight = 400;
    const left = (window.screen.width-popupWidth) / 2;
    const top = (window.screen.height-popupHeight) / 2;
    const destination = window.open('/destination.html', 'destination', 
        'width=${popupWidth},height=${popupHeight}left=${left}, top=${top}');*/

// le bouton ferme la fenêtre destination.html
destination.addEventListener('load', () => {                         // au chargement de la fenêtre destination
    const button2 = destination.document.getElementById('bouton2');  // récupération du bouton dans la fenêtre destination
    button2.addEventListener('click', () => {                        // ajout d'un écouteur d'événement pour le clic sur le bouton
        destination.close();                                         // fermeture de la fenêtre destination
    });
    });
})

const button3 = document.getElementById('bouton3');

button3.addEventListener('click', () => {  
  window.alert("Message"); //ou alert("Message")
})


const button4 = document.getElementById("bouton4");

button4.addEventListener('click', () => {
    let mot = window.prompt("Quel mot afficher ?", "mot de votre choix");
    window.alert(mot);
})
