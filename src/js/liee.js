//Accordeons
const clickable_header = document.getElementById('card-accordeon-header');
const accordeon_body = document.getElementById('card-accordeon-body');
const clickable_header_2 = document.getElementById('card-accordeon-header-2');
const accordeon_body_2 = document.getElementById('card-accordeon-body-2');
const clickable_header_3 = document.getElementById('card-accordeon-header-3');
const accordeon_body_3 = document.getElementById('card-accordeon-body-3');

let oppened = false;
let oppened_2 = false;
let oppened_3 = false;

clickable_header.addEventListener('click', () => {
   if(oppened === false){
       accordeon_body.style.display = 'block';
       accordeon_body.style.animation = 'backInUp 0.5s ease-in';
       oppened = true;
   }else if(oppened === true){
        accordeon_body.style.animation = 'backOutLeft 0.5s ease-out';
        setTimeout(()=>{
            accordeon_body.style.display = 'none';
        }, 500)
        oppened = false;
   }
});

clickable_header_2.addEventListener('click', () => {
    if(oppened_2 === false){
        accordeon_body_2.style.display = 'block';
        accordeon_body_2.style.animation = 'backInUp 0.5s ease-in';
        oppened_2 = true;
    }else if(oppened_2 === true){
            accordeon_body_2.style.animation = 'backOutLeft 0.5s ease-out';
            setTimeout(()=>{
             accordeon_body_2.style.display = 'none';
            }, 500)
            oppened_2 = false;
    }
});

clickable_header_3.addEventListener('click', () => {
    if(oppened_3 === false){
        accordeon_body_3.style.display = 'block';
        accordeon_body_3.style.animation = 'backInUp 0.5s ease-in';
        oppened_3 = true;
    }else if(oppened_3 === true){
            accordeon_body_3.style.animation = 'backOutLeft 0.5s ease-out';
            setTimeout(()=>{
             accordeon_body_3.style.display = 'none';
            }, 500)
            oppened_3 = false;
    }
});