const button = window.document.getElementById('bouton');                 // récupération du bouton

// le bouton ouvre une nouvelle fenêtre avec la page destination.html
button.addEventListener('click', () => {                    // ajout d'un écouteur d'événement pour le clic sur le bouton
    //<const destination = window.open('./destination.html', 'destination', // ouverture d'une nouvelle fenêtre
    //    'width=400, height=400, left=200, top=200');                   // avec les dimensions et la position spécifiées
    const popupWidth = 400;
    const popupHeight = 400;
    const left = (window.screen.width-popupWidth) / 2;
    const top = (window.screen.height-popupHeight) / 2;
    const destination = window.open('/destination.html', 'destination', 
        'width=${popupWidth},height=${popupHeight}left=${left}, top=${top}');

// le bouton ferme la fenêtre destination.html
destination.addEventListener('load', () => {                         // au chargement de la fenêtre destination
    const button2 = destination.document.getElementById('bouton2');  // récupération du bouton dans la fenêtre destination
    button2.addEventListener('click', () => {                        // récupération du bouton dans la fenêtre destination
        destination.close();                                         // fermeture de la fenêtre destination
    });
  });
})

const button3 = document.getElementById('bouton3');      // récupération du bouton

button.addeventListener('click', () => {                 // ajout d'un écouteur d'événement pour le clic sur le bouton
    alert("Message d'alerte");                    // ou alert("Message d'alerte")  affichage d'un message d'alerte
})