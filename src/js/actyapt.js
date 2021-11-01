/**
 * JS Script for: Actitud y Aptitud
 * By: INovomiast
 */

//We call all the work blocks
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');

//We call the Text on the header
const header_txt = document.getElementById('header-text');

//We imported the ANIMATE.CSS library... so we can do cool things
//Now we call all the buttons in the table
const see1 = document.getElementById('see1');
const see2 = document.getElementById('see2');
const see3 = document.getElementById('see3');

//Oh, and I forgot to call all the back buttons
const bBtn1 = document.getElementById('gBack1');
const bBtn2 = document.getElementById('gBack2');
const bBtn3 = document.getElementById('gBack3');

//We call the 'start' of the work
const main = document.getElementById('start');

//Ok, I failed, I forgot to call the main Work Block
const wrk_block = document.getElementById('work_q');

//And now, we create de Events when we click the buttons
see1.addEventListener('click', () => {
    header_txt.innerHTML = 'Diferencia entre Aptitud y Actitud'; 
    main.style.animation = 'backOutDown';
    main.style.display = 'none';
    wrk_block.style.display = 'block';
    block1.style.display = 'block';
});

see2.addEventListener('click', () => {
    header_txt.innerHTML = '¿Cuales son mis aptitudes?';
    main.style.animation = 'backOutDown';
    main.style.display = 'none';
    wrk_block.style.display = 'block';
    block2.style.display = 'block';
});

see3.addEventListener('click', () => {
    header_txt.innerHTML = 'Mi Actitud Ante la Vida';
    main.style.animation = 'backOutDown';
    main.style.display = 'none';
    wrk_block.style.display = 'block';
    block3.style.animation = 'jackInTheBox';
    block3.style.display = 'block';
});

bBtn1.addEventListener('click', () => {
    header_txt.innerHTML = 'Actitud y Aptitud'; 
    main.style.display = 'block';
    wrk_block.style.display = 'none';
    block1.style.display = 'none';
    block2.style.display = 'none';
    block3.style.display = 'none';
});

bBtn2.addEventListener('click', () => {
    header_txt.innerHTML = 'Actitud y Aptitud'; 
    main.style.display = 'block';
    wrk_block.style.display = 'none';
    block1.style.display = 'none';
    block2.style.display = 'none';
    block3.style.display = 'none';
});

bBtn3.addEventListener('click', () => {
    header_txt.innerHTML = 'Actitud y Aptitud'; 
    main.style.display = 'block';
    wrk_block.style.display = 'none';
    block1.style.display = 'none';
    block2.style.display = 'none';
    block3.style.display = 'none';
});