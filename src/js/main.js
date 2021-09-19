//Redirect Function
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const redir_from = urlParams.get('redirect_from');
const email = urlParams.get('email');
const subj = urlParams.get('subject');
const work_id = urlParams.get('work_id');

const mails = ["juanfrancisco.medina@salesianos.edu", "joseantonio.perez@salesianos.edu", ""]

const works_id = ['QImZWQIbc8']

//ID Table
/**
 * QImZWQIbc8 || Lengua || Describir Foto y Pasar Fotos
 * 
 * 
 *  
 */



const subjects = ['lengua', 'matematicas', 'tecnologia', 'plastica', 'or_emp', 'historia', 'ingles']

//
if(redir_from === 'gmail' && email === mails[0] && subj === subjects[0] && work_id === works_id[0]){
    console.log(`Redirected From Gmail || Clicked by: ${mails[0]}`);
    console.log(`Subject: ${subjects[0]}`);
    console.log(`Work ID: ${works_id[0]}`);
    window.location.href = 'https://inovomiast.github.io/school-works/works/subjects/lengua/QImZWQIbc8/';
}

//Like Function
const like_btn = document.getElementById('like_btn');

let liked = false

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