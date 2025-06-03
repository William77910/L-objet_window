// Ce script gère l'ouverture et la fermeture d'une fenêtre, ainsi que l'affichage de messages
// et de boîtes de dialogue dans le navigateur.


document.addEventListener('DOMContentLoaded', () => { // s'assure que le DOM est complètement chargé avant 
                                                      // d'exécuter le script
    const button = document.getElementById('bouton');                 // récupération du bouton
    const button3 = document.getElementById('bouton3');
    const button4 = document.getElementById("bouton4");


// le bouton ouvre une nouvelle fenêtre avec la page destination.html
button.addEventListener('click', () => {                    // ajout d'un écouteur d'événement pour le clic sur le bouton
    const destination = window.open('./destination.html', 'destination', // ouverture d'une nouvelle fenêtre
       'width=400, height=400, left=200, top=200');                      // avec les dimensions et la position spécifiées


// le bouton ferme la fenêtre destination.html
destination.addEventListener('load', () => {                         // au chargement de la fenêtre destination
    const button2 = destination.document.getElementById('bouton2');  // récupération du bouton dans la fenêtre destination
    if (button2) {
    button2.addEventListener('click', () => {                        // ajout d'un écouteur d'événement pour le clic sur le bouton
        destination.close();                                         // fermeture de la fenêtre destination
        });
        }
    });
});


button3.addEventListener('click', () => {  
  window.alert("Message"); //ou alert("Message")
});


button4.addEventListener('click', () => {
    const mot = prompt("Quel est votre prénom ?", "mot de votre choix");
    if (mot !==null) {
        alert(mot);
        }
    });
});
    
