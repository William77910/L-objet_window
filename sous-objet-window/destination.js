const back = document.getElementById('back');

back.addEventListener('click', () => {
    window.history.back();
});

window.alert(window.history.length);