let isLampOn = false;

function toggleLamp() {
    const bulb = document.getElementById('bulb');
    const music = document.getElementById('music');

    if (isLampOn) {
        bulb.style.backgroundColor = '#444';
        bulb.style.boxShadow = '0px 0px 10px 5px rgba(255, 255, 255, 0.1)';
        music.pause();
        music.currentTime = 0;
    } else {
        bulb.style.backgroundColor = '#ffeb3b';
        bulb.style.boxShadow = '0px 0px 20px 10px rgba(255, 235, 59, 0.7)';
        music.play();
    }

    isLampOn = !isLampOn;
}


