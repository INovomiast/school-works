//Redirect Function
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const redir_from = urlParams.get('redirect_from');
const email = urlParams.get('email');
const subj = urlParams.get('subject');
const work_id = urlParams.get('work_id');

const mails = ["juanfrancisco.medina@salesianos.edu", "joseantonio.perez@salesianos.edu"]

const works_id = ['QImZWQIbc8', '1fx2v541xz43lr', '1fx274w1xz4u00', '1fx212dq1xz4gb2']

//ID Table
/**
 * QImZWQIbc8 || Lengua || Describir Foto y Pasar Fotos
 * 1fx2v541xz43lr || Filosofia || Resumen y Actividades
 * 1fx274w1xz4u00 || Ori Prof || 5 Emprendedores Famosos
 * 1fx212dq1xz4gb2 || Ori Prof || Actitud y Aptitud
 */



const subjects = ['lengua', 'matematicas', 'tecnologia', 'plastica', 'or_emp', 'historia', 'ingles', 'religion', 'filosofia'];

//Link variables
if(redir_from === 'gmail' && email === mails[0] && subj === subjects[0] && work_id === works_id[0]){
    console.log(`Redirected From Gmail || Clicked by: ${mails[0]}`);
    console.log(`Subject: ${subjects[0]}`);
    console.log(`Work ID: ${works_id[0]}`);
    window.location.href = 'https://inovomiast.github.io/school-works/works/subjects/lengua/QImZWQIbc8/';
}else if(redir_from === 'classroom' && subj === subjects[8] && works_id[1]){
    console.log('Redirected From Classroom');
    console.log(`Subject: ${subjects[8]}`);
    console.log(`Work ID: ${works_id[1]}`);
    window.location.href = 'https://inovomiast.github.io/school-works/works/subjects/filosofia/1fx2v541xz43lr/';
}else if(redir_from === 'classroom' && subj === subjects[4] && work_id[2]){
    console.log('Redirected From Classroom');
    console.log(`Subject: ${subjects[4]}`);
    console.log(`Work ID: ${works_id[2]}`);
    window.location.href = 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx274w1xz4u00/?page-theme=light';
}else if(redir_from === 'classroom' && subj === subjects[4] && work_id[3]){
    console.log('Redirected From Classroom');
    console.log(`Subject: ${subjects[4]}`);
    console.log(`Work ID: ${work_id[3]}`);
    window.location.href = 'https://inovomiast.github.io/school-works/works/subjects/oriprof/1fx212dq1xz4gb2';
}
//This Now will Work!

/**
 * //Like Function
const like_btn = document.getElementById('like_btn');
const like_btn_2 = document.getElementById('like_btn_2');
const like_btn_3 = document.getElementById('like_btn_3');

let liked = false;
let liked_2 = false;
let liked_3 = false;

like_btn.addEventListener('click', () => {
    if(liked === false) {
        like_btn.style.animation = 'like_roll_anim 0.7s ease-in';
        like_btn.style.color = 'royalblue';
        liked = true;
    }else{
        like_btn.style.animation = 'unlike_roll_anim 0.7s ease-in';
        like_btn.style.color = 'black';
        liked = false;
    }
});

like_btn_2.addEventListener('click', () => {
    if(liked_2 === false) {
        like_btn_2.style.animation = 'like_roll_anim 0.7s ease-in';
        like_btn_2.style.color = 'royalblue';
        liked_2 = true;
    }else{
        like_btn_2.style.animation = 'unlike_roll_anim 0.7s ease-in';
        like_btn_2.style.color = 'black';
        liked_2 = false;
    }
});

like_btn_3.addEventListener('click', () => {
    if(liked_3 === false) {
        like_btn_3.style.animation = 'like_roll_anim 0.7s ease-in';
        like_btn_3.style.color = 'royalblue';
        liked_3 = true;
    }else{
        like_btn_3.style.animation = 'unlike_roll_anim 0.7s ease-in';
        like_btn_3.style.color = 'black';
        liked_3 = false;
    }
});
*/

//Send Personalized Link


//Chnage Dark Mode
const dark_mode_btn = document.querySelector('#dark_mode_btn');

dark_mode_btn.addEventListener('click', () => {
    console.log('Theme changed: ?theme = light');
});