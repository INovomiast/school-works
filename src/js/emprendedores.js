/**
 * Emprendedor_1: Elon_Musk
 * Emprendedor_2: Bill Gates
 * Emprendedor_3: Jack Ma
 * Emprendedor_4: Melanie Perkins
 * Emprendedor_5: Sam Walton
 */

//Images
const emp_1 = document.getElementById('emprendedor_1');
const emp_2 = document.getElementById('emprendedor_2');
const emp_3 = document.getElementById('emprendedor_3');
const emp_4 = document.getElementById('emprendedor_4');
const emp_5 = document.getElementById('emprendedor_5');

//Page Header
const page_header = document.getElementById('header-text');

//Information Frame
const iFrame = document.getElementById('iFrame');

//IFrame fields
const e_name = document.getElementById('entrepreneur_name');
const e_epoch = document.getElementById('entrepreneur_epoch');
const e_company = document.getElementById('entrepreneur_company');
const e_idea = document.getElementById('entrepreneur_idea');
const e_problem = document.getElementById('entrepreneur_issues');

//IFrame Addons
const close_btn = document.getElementById('iFrame_closeButton');

//Code:

//On Click
emp_1.addEventListener('click', () => {
    iFrame.style.display = 'block';
    e_name.innerText = 'Elon Musk';
    e_epoch.innerText = '1995 - Actualidad';
    e_company.innerText = 'Tesla, SpaceX, Neuralink, The Boring Company, Zip2, OpenAI, X.com y MuskFundation';
    e_idea.innerText =  `
        Elon Musk se caracteriza no por haber innovado en un solo campo, sino en varios como:
        SpaceX (Empresa dedicada al campo Espacial)
        Neuralink (Neurotecnologia)
        OpenAI (Inteligencia Artificial de Codigo Abierto)
        Tesla (Empresa de Automovilistica Electrica y Autonoma)
    `;
    e_problem.innerText = `
        Elon Musk tuvo mucho exito, pero antes de empezar se mudo a Canada, y no tuvieron <br>
        la mejor estabilidad monetaria, pero esto fue por un tiempo corto, a sido dificilisimo <br>
        encontrar los problemas.
    `;
});

emp_2.addEventListener('click', () => {
    iFrame.style.display = 'block';
    e_name.innerText = 'Bill Gates';
    e_epoch.innerText = '1975 - Actualidad';
    e_company.innerText = 'Microsoft, bgC3, TerraPower, BrandedEntertainmentNetwork, Cascade Invesment';
    e_idea.innerText = `
        Bill Gates la primera gran idea que lo lanzo a su actual fama fue la Creacion de Microsoft
        en 1975, así "creando" como primera gran venta, MS-DOS, un sistema el cual habia desarrollado
        IBM y comprado Bill por solo 50.000$ y lo vendió por billones! Así desarrollando lo que ahora
        conocemos como Microsoft!
    `;
    e_problem.innerText = `
        Bill Gates no tuvo muchos problemas para crear Microsoft, aunque no mantenia una buena relacion
        con MITS, una pequeña empresa, pero en sí no tuvo problemas para que su emprendimiento saliese
        adelante.
    `;
});

emp_3.addEventListener('click', () => {
    iFrame.style.display = 'block';
    e_name.innerText = 'Jack Ma';
    e_epoch.innerText = '1999 - Actualidad';
    e_company.innerText = 'Alibaba Group y AliExpress';
    e_idea.innerText = `
        Jack Ma fue el creador de Alibaba Group, creo un consorcio
        privado chino dedicado al Comercio electronico en Internet,
        actualmente siendo una de las mayores plataformas de venta
        Online del mundo.
    `;
    e_problem.innerText = `
        Jack Ma, no fue el mejor en la universidad, ya que tardo 4 años en acceder a ella,
        y por lo que me he informado, los problemas que tuvo este a la hora de realizar su
        emprendimiento, pues no figuran.
    `;
});

emp_4.addEventListener('click', () => {
    iFrame.style.display = 'block';
    e_name.innerText = 'Melanie Perkins';
    e_epoch.innerText = '2012 || 2013 - Actualidad';
    e_company.innerText = 'Canva';
    e_idea.innerText = `
        La idea que mantuvo Melanie Perkins fue crear un editor de imagenes
        gratuito, con una gran libreria de assets y cosas para que una persona
        pueda crear diseños, facil y rapido!
    `;
    e_problem.innerText = `
        Al crear su primera empresa, se intimido, pero así aprendio lo que necesitaba
        para desarrollar una herramienta que ahora tienen registrados a unos 10.000.000
        de usuarios.
    `;
});

emp_5.addEventListener('click', () => {
    iFrame.style.display = 'block';
    e_name.innerText = 'Sam Walton';
    e_epoch.innerText = '1962 - Actualidad';
    e_company.innerText = 'Walmart';
    e_idea.innerText = `
        Sam Walton, un exmilitar estadounidense creo Walmart, una corporación
        multinacional de tiendas, que opera cadenas de grandes almacenes de descuento
        y grandes clubes de almacenes.
    `;
    e_problem.innerText = `
        Este emprendedor, yo no le he encontrado los problemas que tuvo.
    `;
});

//On Hover
emp_1.addEventListener('mouseenter', () => {
    page_header.innerHTML = 'Elon Musk';
});

emp_2.addEventListener('mouseover', () => {
    page_header.innerHTML = 'Bill Gates';
});

emp_3.addEventListener('mouseover', () => {
    page_header.innerHTML = 'Jack Ma';
});

emp_4.addEventListener('mouseover', () => {
    page_header.innerHTML = 'Melanie Perkings';
});

emp_5.addEventListener('mouseover', () => {
    page_header.innerHTML = 'Sam Walton';
});

//On Left Hover
emp_1.addEventListener('mouseleave', () => {
    page_header.innerHTML = '5 Emprendedores Famosos';
});

emp_2.addEventListener('mouseleave', () => {
    page_header.innerHTML = '5 Emprendedores Famosos';
});

emp_3.addEventListener('mouseleave', () => {
    page_header.innerHTML = '5 Emprendedores Famosos'; 
});

emp_4.addEventListener('mouseleave', () => {
    page_header.innerHTML = '5 Emprendedores Famosos';
});

emp_5.addEventListener('mouseleave', () => {
    page_header.innerHTML = '5 Emprendedores Famosos';
});

//Close Button
close_btn.addEventListener('click', () => {
   iFrame.style.display = 'none'; 
});

