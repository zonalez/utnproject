var video=document.querySelector('#videotech');
var boton = document.querySelector('#reproducir');

function reproducir () {
    if (video.paused) {
        video.play();
        boton.innerHTML='<span class="icon-pause2"></span>';
    } else {
        video.pause();
        boton.innerHTML='<span class="icon-play3"></span>';
    }
}

function detener() {
    video.pause();
    video.currentTime = 0;
    boton.innerHTML='<span class="icon-play3"></span>';
}