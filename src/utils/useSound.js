import audioClick from '../assets/sonido.mp3'
import audioSwift from '../assets/sonido2.mp3'


export const playSoundClick = () => {
    const audio = new Audio(audioClick);
    audio.volume = 0.2;
    audio.play();
};

export const playSoundSwift = (route) => {
    const selected = document.getElementsByClassName('active').item(0).innerHTML;
    if (selected === route) return;
    const audio = new Audio(audioSwift);
    audio.volume = 0.05;
    audio.currentTime = 0.5;
    audio.play();
    document.getElementById('menu-toggle').checked = false;
};