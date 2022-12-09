var buttonDisco = document.getElementById('button_disco');
var buttonTaart = document.getElementById('button_taart');
var buttonMedaille = document.getElementById('button_medaille');
var video = document.getElementById('video');


buttonDisco.addEventListener('click', speelDisco);
buttonTaart.addEventListener('click', speelTaart);
buttonMedaille.addEventListener('click', speelMedaille);

function speelDisco() {
    video.src = "vids/discospood.mp4";
    video.muted = false;
    console.log('run disco');
}

function speelTaart() {
    video.src = "vids/taartspood.mp4";
    video.muted = false;
    console.log('run taart');
}

function speelMedaille() {
    video.src = "vids/medaillespood.mp4";
    video.muted = false;
    console.log('run medaille');
}