const back = document.getElementById('back');           // bouton pour revenir à la page précédente
back.addEventListener('click', () => {                  // lorsque l'on clique sur le bouton back

    window.history.back();                              // on revient à la page précédente dans l'historique
});

window.alert(window.history.length);                    // affiche le nombre de pages dans l'historique


//document.cookie est une chaîne qui contient tous les cookies séparés par "; "
//Nous utilisons la méthode split pour créer un tableau contenant les cookies

let tableauId = document.cookie.split("; ");            // sépare les cookies en un tableau

//Nous utilisons la méthode split pour séparer les clés des valeurs dans un forEach et ajouter les clés et valeurs à un tableau identifiants

let identifiants = new Array();                         // tableau pour stocker les identifiants

tableauId.forEach((ligne) => {                          // pour chaque ligne du tableau de cookies
    let tab = ligne.split("=");                         // sépare la clé et la valeur
    identifiants.push([tab[0], tab[1]]);                // ajoute la clé et la valeur au tableau identifiants
});

//Nous pouvons afficher le tableau dans la console

console.log(identifiants);                               // affiche le tableau des identifiants dans la console