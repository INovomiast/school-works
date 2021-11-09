/**
 * Here we control all the poems and things on the work
 */

//Call All The Poems
const poem1 = document.getElementById('poema1');
const poem2 = document.getElementById('poema2');
const poem3 = document.getElementById('poema3');
const poem4 = document.getElementById('poema4');
const poem5 = document.getElementById('poema5');
const poem6 = document.getElementById('poema6');
const poem7 = document.getElementById('poema7');
const poem8 = document.getElementById('poema8');
const poem9 = document.getElementById('poema9');
const poem10 = document.getElementById('poema10');
const poem11 = document.getElementById('poema11');
const poem12 = document.getElementById('poema12');
const poem13 = document.getElementById('poema13');
const poem14 = document.getElementById('poema14');
const poem15 = document.getElementById('poema15');
const poem16 = document.getElementById('poema16');

//We call all the work body
const wrk_body = document.getElementById('work-body');

//We call now the Work Header... this will display the same Header on the texts
const work_header = document.getElementById('header-text')

//Now we call the questions and answares... bcs we are going to edit it with js
const wrk_qstans = document.getElementById('');
const ans1 = document.getElementById('');
const ans2 = document.getElementById('');
const ans3 = document.getElementById('');
const ans4 = document.getElementById('');
const ans5 = document.getElementById('');
const ans6 = document.getElementById('');

//We call the URL Parameters
const text = urlParams.get('text');

//Now we create a Click event on all the poems
poem1.addEventListener('click', () => {
    redir_to('./index.html?text=1');
});

poem2.addEventListener('click', () => {
    redir_to('./index.html?text=2');
});

poem3.addEventListener('click', () => {
    redir_to('./index.html?text=3');
});

poem4.addEventListener('click', () => {
    redir_to('./index.html?text=4');
});

poem5.addEventListener('click', () => {
    redir_to('./index.html?text=5');
});

poem6.addEventListener('click', () => {
    redir_to('./index.html?text=6');
});

poem7.addEventListener('click', () => {
    redir_to('./index.html?text=7');
});

poem8.addEventListener('click', () => {
    redir_to('./index.html?text=8');
});

poem9.addEventListener('click', () => {
    redir_to('./index.html?text=9');
});

poem10.addEventListener('click', () => {
    redir_to('./index.html?text=10');
});

poem11.addEventListener('click', () => {
    redir_to('./index.html?text=11');
});

poem12.addEventListener('click', () => {
    redir_to('./index.html?text=12');
});

poem13.addEventListener('click', () => {
    redir_to('./index.html?text=13');
});

poem14.addEventListener('click', () => {
    redir_to('./index.html?text=14');
});

poem15.addEventListener('click', () => {
    redir_to('./index.html?text=15');
});

poem16.addEventListener('click', () => {
    redir_to('./index.html?text=16');
});


//Now we create a redir function
function redir_to(link){
    window.location.href = link;
}

//If Statements (When URLParam is x display y in body)
if(text === '1'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Rima XIII - Gustavo Adolfo Becquer';
    wrk_qstans.style.display = 'block';
}else if(text === '2'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Rima XLI - Gustavo Adolfo Becquer';
    wrk_qstans.style.display = 'block';
}else if(text === '3'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Un manso río, una vereda estrecha - Rosalia de Castro';
    wrk_qstans.style.display = 'block';
}else if(text === '4'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Dueña de la Negra Toca - Jose Zorrilla';
    wrk_qstans.style.display = 'block';
}else if(text === '5'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'A la noche - Jose de Espronceda';
    wrk_qstans.style.display = 'block';
}else if(text === '6'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'A la patria - Jose de Espronceda';
    wrk_qstans.style.display = 'block';
}else if(text === '7'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Estaciones - Rosalia de Castro';
    wrk_qstans.style.display = 'block';
}else if(text === '8'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Un Recuerdo - Rosalia de Castro';
    wrk_qstans.style.display = 'block';
}else if(text === '9'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'El diablo mundo - Jose de Espronceda';
    wrk_qstans.style.display = 'block';
}else if(text === '10'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Don Timoteo o el literato - Marino José de Larra';
    wrk_qstans.style.display = 'block';
}else if(text === '11'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Hora tras Hora, Día tras Día - Rosalia de Castro';
    wrk_qstans.style.display = 'block';
}else if(text === '12'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Don Juan Tenorio - Jose Zorrilla';
    wrk_qstans.style.display = 'block';
}else if(text === '13'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Don Álvaro o la fuerza del sino - Duque de Rivas';
    wrk_qstans.style.display = 'block';
}else if(text === '14'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'A la muerte de... - Jose Zorrilla';
    wrk_qstans.style.display = 'block';
}else if(text === '15'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Don Álvaro o la fuerza del sino - Jose Zorrilla (Fragmento 2)';
    wrk_qstans.style.display = 'block';
}else if(text === '16'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Literatura - Mariano Jose de Larra';
    wrk_qstans.style.display = 'block';
}