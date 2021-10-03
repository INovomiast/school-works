//Works Block Manager
const wrk_blk_1 = document.querySelector('#work-blocks-1');
const wrk_blk_2 = document.querySelector('#work-blocks-2');
const wrk_blk_3 = document.querySelector('#work-blocks-3');

//Buttons
const next_btn_1 = document.querySelector('#btn-next');
const next_btn_2 = document.querySelector('#btn-next-2');
const btn_finish = document.querySelector('#btn-finish');

next_btn_1.addEventListener('click', () => {
   wrk_blk_1.style.display = 'none';
   wrk_blk_2.style.display = 'block';
});

next_btn_2.addEventListener('click', () => {
    wrk_blk_2.style.display = 'none';
    wrk_blk_3.style.display = 'block';
});

btn_finish.addEventListener('click', () => {
    window.location.href = 'https://inovomiast.github.io/school-works/works/subjects/filosofia/1fx2v541xz43lr/finish/';
});