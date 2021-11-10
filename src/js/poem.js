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
const wrk_qstans = document.getElementById('wrk_ans');
const ans1 = document.getElementById('qans-1');
const ans2 = document.getElementById('qans-2');
const ans3 = document.getElementById('qans-3');
const ans4 = document.getElementById('qans-4');
const ans5 = document.getElementById('qans-5');
const ans6 = document.getElementById('qans-6');

//We call the URL Parameters
const text = urlParams.get('text');

//We call the... go back btn
const gback = document.getElementById('gBackBtn');

gback.addEventListener('click', () => {
   redir_to('./index.html') 
});


//On Scroll appear gback up btn
const gupb = document.getElementById('gUpBtn');

document.onscroll = () => {
    gupb.style.display = 'block';
}

gupb.onclick = () => {
    gupb.style.display = 'none';
}

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
    
    //All Question Answares
    ans1.innerHTML = `
        Este texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
        Pertenece al Romanticismo y fue compuesta en 1871.
    `;
    ans3.innerHTML = `
        El tema de este texto es el amor y compara este con la naturaleza.
    `;
    ans4.innerHTML = `
        Aqui Becquer habla sobre un amor idealizado así comparandola con la naturaleza.
    `;
    ans5.innerHTML = `
        Tiene: <br>
        <ul>
            <li>Tiene 2 Estrofas.</li>
            <li>Cada una con 4 versos.</li>
            <li>Con rima Asonante.</li>
        </ul>
        Silabas: <br>
        11 - 10 - 11 - 7; <br>
        11 - 11 - 11 - 7;   
    `;
    ans6.innerHTML = `
        Gustavo Adolfo Becquer se convirtio en un autor famoso despúes de morir... sus amigos <br>
        publicaron todas sus rimas y obras y se convirtio en lo que es ahora.
    `;
}else if(text === '2'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Rima XLI - Gustavo Adolfo Becquer';
    wrk_qstans.style.display = 'block';

    //All Question Answares
    ans1.innerHTML = `
        Este texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
    Pertenece al Romanticismo y fue compuesta en 1885.
    `;
    ans3.innerHTML = `
        Este texto me transmite el hecho de que becquer encontro el amor de forma repentina <br>
        y este compara como si fuese una estructura con un huracan.
    `;
    ans4.innerHTML = `
        El tema de este texto es el amor repentino y este se representa con una torre y un huracan.
    `;
    ans5.innerHTML = `
        Tiene: <br>
        <ul>
            <li>Tiene 2 Estrofas.</li>
            <li>Cada una con 4 versos.</li>
            <li>Con rima Asonante.</li>
        </ul>
        Silabas: <br>
        12 - 10 - 14 - 4; <br>
        14 - 13 - 14 - 4; 
    `;
    ans6.innerHTML = `
        Gustavo Adolfo Becquer se convirtio en un autor famoso despúes de morir... sus amigos <br>
        publicaron todas sus rimas y obras y se convirtio en lo que es ahora.
    `;
}else if(text === '3'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Un manso río, una vereda estrecha - Rosalia de Castro';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        El texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
        Pertenece al Romanticismo y su fecha de composicion fue en 1884.
    `;
    ans3.innerHTML = `
        Este poema, personalmente me transmite... soledad... como si Rosalia de Castro
        se sintiese en soledad por alguien... eso es lo que me transmite.
    `;
    ans4.innerHTML = `
        Habla sobre la perdida tragica y la soledad que conlleva esta...
    `;
    ans5.innerHTML = `
    Tiene: <br>
    <ul>
        <li>Tiene 1 Estrofas.</li>
        <li>Cada una con 4 versos.</li>
        <li>Con rima Consonante.</li>
    </ul>
    Silabas: <br>
    12 - 13 - 14 - 15; <br>
    `;
    ans6.innerHTML = `
        Rosalia de Castro era una escritora Gallega la cual escribia sus libros en Gallego y
        Castellano.
    `;
}else if(text === '4'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Dueña de la Negra Toca - Jose Zorrilla';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        El texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
        Pertenece al Romanticismo y su fecha de composicion fue en 1905.
    `;
    ans3.innerHTML = `
       En esta obra, encuentro interesante, que se hable sobre como el autor quiere
       besar a una mujer y lo que haria por ese beso. 
    `;
    ans4.innerHTML = `
        Habla sobre un amor idealizado... aunque no lo retrataria así... porque
        este Fragmento, pues... para que me voy a inventar nada... si, habla sobre
        un amor idealizado.    
    `;
    ans5.innerHTML = `
    Tiene: <br>
    <ul>
        <li>Tiene 2 Estrofas.</li>
        <li>Cada una con 4 versos.</li>
        <li>Con rima Consonante.</li>
        </ul>
        Silabas: <br>
        9 - 7 - 8 - 9; <br>
        7 - 8 - 7 - 10; 
        `;
    ans6.innerHTML = `
        José Zorrilla y Moral fue un poeta y dramaturgo español, autor del drama romántico Don Juan Tenorio.
    `;
}else if(text === '5'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'A la noche - Jose de Espronceda';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        El texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
        Pertenece al Romanticismo y fue compuesta en el año 1876.
    `;
    ans3.innerHTML = `
        Esta obra, parece tener... no un caracter amoroso, sino... social, en el
        cual representa como son las noches de un pastor.
    `;
    ans4.innerHTML = `
        Eso, lo dicho anteriormente, tiene un caracter social...  
    `;
    ans5.innerHTML = `
        <li>Tiene 2 Estrofas.</li>
        <li>Cada una con 4 versos.</li>
        <li>Con rima Asonante.</li>
        </ul>
        Silabas: <br>
        8 - 9 - 9 - 8; <br>
        9 - 10 - 8 - 9; 
    `;
    ans6.innerHTML = `
    Espronceda nació en Almendralejo (provincia de Badajoz, Extremadura) el 25 de marzo de 1808. El nombre completo que le dieron al bautizarlo en ese mismo día fue «José Ignacio Javier Oriol Encarnación de Espronceda y Delgado».
    `;
}else if(text === '6'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'A la patria - Jose de Espronceda';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        El texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
        Perteneciente al Romanticismo y Compuesto en el año 1876.
    `;
    ans3.innerHTML = `
        Se da el tema de un amor, pero no hacia una persona, sino a la Patria... y de
        como este se siente al estar excluido de ella.
    `;
    ans4.innerHTML = `
        Es un amor hacia la patria, como antes he mencionado...
    `;
    ans5.innerHTML = `
        <li>Tiene 2 Estrofas.</li>
        <li>Cada una con 4 versos.</li>
        <li>Con rima Asonante.</li>
        </ul>
        Silabas: <br>
        11 - 9 - 11 - 8; <br>
        8 - 7 - 14 - 10;   
    `;
    ans6.innerHTML = `
        Su obra más famosa es Poesias, en donde se recompilan un monton de sus poesias.
    `;
}else if(text === '7'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Estaciones - Rosalia de Castro';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        El texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
        Perteneciente al Romanticismo y Compuesto en el año (No lo he encontrado).
    `;
    ans3.innerHTML = `
        Este poema habla sobre las diferentes estaciones del año, y con foco 
        principal en la primavera.
    `;
    ans4.innerHTML = `
        Habla sobre como es el amor dependiendo de las estaciones del año.
    `;
    ans5.innerHTML = `
        <li>Tiene 5 Estrofas.</li>
        <li>Cada una con 5 -  versos.</li>
        <li>Con rima Consoante.</li>
        </ul>
        Silabas: <br>
        13 - 6 - 13 - 13 - 10; <br>
        13 - 12 - 12 - 13; <br>
        12 - 8 - 13 - 8; <br>
        13 - 6 - 13 - 12 - 12 - 6; <br>
        13 - 13 - 11 - 13 - 14 - 12; 
    `;
    ans6.innerHTML = `
        Rosalia de Castro sufrio mucho en su vida, pero el 
        suceso que más le marco fue la muerte de su hija.
    `;
}else if(text === '8'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Un Recuerdo - Rosalia de Castro';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        El texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
        Perteneciente al Romanticismo y Compuesto en el año (No lo he encontrado).
    `;
    ans3.innerHTML = `
        Me expresa el hecho de que el pensamiento nos hace sufrir muchas veces
        innecesareamente.
    `;
    ans4.innerHTML = `
        Habla sobre el pensamiento que tiene la autora hacia un suceso que le
        pone depresiva.
    `;
    ans5.innerHTML = `
        <li>Tiene 1 Estrofas.</li>
        <li>Cada una con 4 versos.</li>
        <li>Con rima Asonante.</li>
        </ul>
        Silabas: <br>
        12 - 9 - 13 - 7;   
    `;
    ans6.innerHTML = `
        Ya no se que ponerte de esta tía...
    `;
}else if(text === '9'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'El diablo mundo - Jose de Espronceda';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        El texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
        Perteneciente al Romanticismo y Compuesto en el año 1840 al 1842.
    `;
    ans3.innerHTML = `
    Expresa un sentimiento de amor idealizado hacia otra persona.
    `;
    ans4.innerHTML = `
    Expresa un sentimiento de amor idealizado hacia otra persona. 
    `;
    ans5.innerHTML = `
        <li>Tiene 1 Estrofas.</li>
        <li>Cada una con 8 versos.</li>
        <li>Con rima Asonante.</li>
        </ul>
        Silabas: <br>
        12 - 13 - 12 - 14 - 12 - 12 - 11 - 14; 
    `;
    ans6.innerHTML = `
        YO NO SE QUE PONER!
    `;
}else if(text === '10'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Don Timoteo o el literato - Marino José de Larra';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        Este texto pertenece al Genero Teatral.
    `;
    ans2.innerHTML = `
        Perteneciente al Romanticismo y Compuesto en el año 1833.
    `;
    ans3.innerHTML = `
        Esta obra de teatro habla sobre como la ciencia a arruinado 
        a la poesia.
    `;
    ans4.innerHTML = `
        Obra destinada a la critica social y cientifica.
    `;
    ans5.innerHTML = `
        ES UNA OBRA DE TEATRO.
    `;
    ans6.innerHTML = `
        Mariano Jose de Larra fue un Politico, Periodista y Escritor!.
    `;
}else if(text === '11'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Hora tras Hora, Día tras Día - Rosalia de Castro';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        El texto pertenece al genero de la Lirica.
    `;
    ans2.innerHTML = `
        Perteneciente al Romanticismo y Compuesto en el año (No lo he encontrado).
    `;
    ans3.innerHTML = `
        En mi opinion, el poema transmite mucha nostalgia y pena porque echa de menos a una
        persona, además de desesperación, aunque cuando recuerda lo feliz que fue se alegra.
    `;
    ans4.innerHTML = `
        A ver, como podemos ver, para el que no sepa, que Rosalia de Castro escribe esto
        por la perdida de su hija, ya que tuvo su epoca depresiva por esa perdida. Es un
        poema de amor, hacia una persona que perdio basicamente.
    `;
    ans5.innerHTML = `
        <li>Tiene 3 Estrofas.</li>
        <li>Cada una con 5, 6 y 4  versos.</li>
        <li>Con rima Asonante.</li>
        </ul>
        Silabas: <br>
        10 - 12 - 6 - 11 - 5; <br>
        11 - 6 - 10 - 14 - 10 - 14; <br>
        11 - 10 - 10 - 7; 
    `;
    ans6.innerHTML = `
        NO SE QUE PONERTE DE ROSALIA! TRA TRA
    `;
}else if(text === '12'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Don Juan Tenorio - Jose Zorrilla';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        Este texto pertenece al Genero Teatral.
    `;
    ans2.innerHTML = `
    Perteneciente al Romanticismo y Compuesto en el año 1844.
    `;
    ans3.innerHTML = `
        Habla sobre un Don Juan, que da ahi viene la expresión ser un Don Juan
        ya que este era un ligon.
    `;
    ans4.innerHTML = `
        En si habla de la muerte, en dicha escena Don Juan habla con una estatua
        mientras mira su funeral
    `;
    ans5.innerHTML = `
        ES UNA OBRA DE TEATRO.
    `;
    ans6.innerHTML = `
        YA NO PUEDO MÁS!
    `;
}else if(text === '13'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Don Álvaro o la fuerza del sino - Duque de Rivas';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        Este texto pertenece al Genero Teatral.
    `;
    ans2.innerHTML = `
        Perteneciente al Romanticismo y Compuesto en el año 1835.
    `;
    ans3.innerHTML = `
        Habla sobre la imposibilidad de despedida de una hija hacia su padre.
    `;
    ans4.innerHTML = `
        Habla sobre la muerte y el no aceptar la ida de una persona del mundo.
    `;
    ans5.innerHTML = `
    ES UNA OBRA DE TEATRO.
    `;
    ans6.innerHTML = `
       NAH, EL SUICIDIO ES LA MEJOR OPCION! 
    `;
}else if(text === '14'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'A la muerte de... - Jose Zorrilla';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        Es un texto que pertenece a la Lirica.
    `;
    ans2.innerHTML = `
        Perteneciente al Romanticismo y compuesta en el año [Non Avaliable Year].
   `;
    ans3.innerHTML = `
        
    `;
    ans4.innerHTML = `
        
    `;
    ans5.innerHTML = `
    <li>Tiene 1 Estrofas.</li>
    <li>Cada una con 15  versos.</li>
    <li>Con rima Asonante.</li>
    </ul>
    Silabas: <br>
    10 - 12 - 6 - 11 - 5; <br>
    11 - 6 - 10 - 14 - 10 - 14; <br>
    11 - 10 - 10 - 7;
    `;
    ans6.innerHTML = `
       Ufffff.... ya no puedo más... 
    `;
}else if(text === '15'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Don Álvaro o la fuerza del sino - Jose Zorrilla (Fragmento 2)';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
        Este texto pertenece al Genero Teatral.
    `;
    ans2.innerHTML = `
    Perteneciente al Romanticismo y Compuesto en el año 1835.
    `;
    ans3.innerHTML = `
    Habla sobre la imposibilidad de despedida de una hija hacia su padre.

    `;
    ans4.innerHTML = `
    Habla sobre la muerte y el no aceptar la ida de una persona del mundo.
    `;
    ans5.innerHTML = `
    ES UNA OBRA DE TEATRO.

    `;
    ans6.innerHTML = `
        UFFFF, SI NO VOY A CLASE NO SE PREOCUPE!
    `;
}else if(text === '16'){
    wrk_body.style.display = 'none';
    work_header.innerHTML = 'Literatura - Mariano Jose de Larra';
    wrk_qstans.style.display = 'block';
    
    //All Question Answares
    ans1.innerHTML = `
    El texto pertenece al genero de la Narrativa.
    `;
    ans2.innerHTML = `
    Perteneciente al Romanticismo y la fecha de composicion no me la se...
 
    `;
    ans3.innerHTML = `
    Habla criticando a la epoca en la que se encuentra la literatura.
    `;
    ans4.innerHTML = `
        Es una obra de caracter Critico
    `;
    ans5.innerHTML = `
    ES NOVELA O OPINION
    `;
    ans6.innerHTML = `
        YA ESTA!!
    `;
}