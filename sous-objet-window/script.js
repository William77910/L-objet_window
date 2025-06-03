let destination = document.getElementById('destination');   // bouton pour aller à une autre page

const forward = document.getElementById('forward');         // bouton pour avancer dans l'historique

destination.addEventListener('click', () => {               // lorsque l'on clique sur le bouton destination
destination = window.location.assign('destination.html');   // on redirige vers la page destination.html
});

forward.addEventListener('click', () => {                   // lorsque l'on clique sur le bouton forward
    window.history.forward();                               // on avance d'une page dans l'historique
});

window.alert(window.history.length);                        // affiche le nombre de pages dans l'historique


//création d’un objet Date pour créer une date d’expiration :

const dateExp = new Date();

dateExp.setMonth(dateExp.getMonth() + 1);                   //nous ajoutons 1 mois à la date 
                                                            // pour que les cookies expirent dans 1 mois

//nous interrogeons l’utilisateur sur son username et son mdp avec window.prompt()

const username = prompt("Username");                        // demande le nom d'utilisateur

const mdp = prompt("Mot de passe");                         // demande le mot de passe

const name = prompt("Nom");                                 // demande le nom de l'utilisateur

//creation des cookies

document.cookie = `username=${username}; expires=${dateExp.toUTCString()}`;  // cookie pour le nom d'utilisateur

document.cookie = `mdp=${mdp}; expires=${dateExp.toUTCString()}`;            // cookie pour le mot de passe

document.cookie = `name=${name}; expires=${dateExp.toUTCString()}`;          // cookie pour le nom