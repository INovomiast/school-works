//Accordeons
const clickable_header = document.getElementById('card-accordeon-header');
const accordeon_body = document.getElementById('card-accordeon-body');
const clickable_header_2 = document.getElementById('card-accordeon-header-2');
const accordeon_body_2 = document.getElementById('card-accordeon-body-2');
const clickable_header_3 = document.getElementById('card-accordeon-header-3');
const accordeon_body_3 = document.getElementById('card-accordeon-body-3');
const clickable_header_4 = document.getElementById('card-accordeon-header-4');
const accordeon_body_4 = document.getElementById('card-accordeon-body-4');


//Texts
const card_text_1 = document.getElementById('card-1-text');
const card_text_2 = document.getElementById('card-2-text');
const card_text_3 = document.getElementById('card-3-text');
const card_text_4 = document.getElementById('card-4-text');



let oppened = false;
let oppened_2 = false;
let oppened_3 = false;
let oppened_4 = false;

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

clickable_header_4.addEventListener('click', () => {
    if(oppened_4 === false){
        accordeon_body_4.style.display = 'block';
        accordeon_body_4.style.animation = 'backInUp 0.5s ease-in';
        oppened_4 = true;
    }else if(oppened_4 === true){
            accordeon_body_4.style.animation = 'backOutLeft 0.5s ease-out';
            setTimeout(()=>{
             accordeon_body_4.style.display = 'none';
            }, 500)
            oppened_4 = false;
    }
});

card_text_1.innerHTML = `
    

`;

card_text_2.innerHTML = `

`;

card_text_3.innerHTML = `

`;

card_text_4.innerHTML = `

`;