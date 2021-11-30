const start_btn = document.getElementById('btn-start');
const next_btn_one = document.getElementById('nxt-btn-1');
const next_btn_two = document.getElementById('nxt-btn-2');
const next_btn_three = document.getElementById('nxt-btn-3');

const start = document.getElementById('str-page');
const qone = document.getElementById('qone');
const qtwo = document.getElementById('qtwo');
const qthree = document.getElementById('qthree');

start_btn.addEventListener('click', () => {
    start.style.animation = 'slide_down 1s ease-out';
    setTimeout(()=>{
        start.style.display = 'none';
        qone.style.animation = 'slide_appear_left 1s ease-in';
        setTimeout(() => {
            qone.style.display = 'block';
        });
   }, 1000); 
});

next_btn_one.addEventListener('click', () => {
    document.body.style.animation = 'slide_blackout 3s ease-out';
    qone.style.display = 'none';
    qone.style.animation = 'slide_blackout 3s ease-out';
    setTimeout(() => {
        qtwo.style.animation = 'slide_appear_fade 3s ease-in';
        qtwo.style.display = 'block';
    }, 3000);
});

next_btn_two.addEventListener('click', () => {
    document.body.style.animation = 'slide_blackout 3s ease-out';
    qtwo.style.display = 'none';
    qtwo.style.animation = 'slide_blackout 3s ease-out';
    setTimeout(() => {
        qthree.style.animation = 'slide_shrink 3s ease-in';
        qthree.style.display = 'block';
    }, 3000);
});