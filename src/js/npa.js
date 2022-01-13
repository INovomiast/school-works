const start_btn = document.getElementById('str-btn');
const intro_div = document.getElementById('intro');
const story_div = document.getElementById('story');
const questions_div = document.getElementById('questions');
const next_btn_1 = document.getElementById('nxt_btn_1')
const finish_div = document.getElementById('finish');
const finish_btn = document.getElementById('finish-btn');

start_btn.addEventListener('click', () => {
   intro_div.style.display = 'none'; 
   story_div.style.display = 'block';
});

next_btn_1.addEventListener('click', () => {
    story_div.style.display = 'none';
    questions_div.style.display = 'block';
});

finish_btn.addEventListener('click', () => {
   questions_div.style.display = 'none';
   finish_div.style.display = 'block';
});