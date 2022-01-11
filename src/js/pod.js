/**
 * Podcast Player Script by: INovomiast
 * ©️ INovomiast - 2022
 * 
 * ROOT@INOVOMIAST$~/= XXXX-XXXX-XXXX
 */



//Icons
const pause = "fa-solid fa-circle-pause";
const play = "fa-solid fa-circle-play";

//Playing Boolean
let is_playing = false;

//Play Button and Symbol
const play_btn = document.getElementById('pod-disp-play-btn');
const play_btn_simb = document.getElementById('pod-disp-play-btn-simb');

//Audio File
const podcast = new Audio('https://inovomiast.github.io/school-works/src/media/audio/podcast.mp3')

//Play Pause
play_btn.addEventListener('click', () => {
    if(is_playing == false) {
        play_btn_simb.className = pause;
        podcast.play();
        is_playing = true;
    }else{
        play_btn_simb.className = play;
        podcast.pause();
        is_playing = false;
    }
});

