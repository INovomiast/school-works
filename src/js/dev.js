/**
 * DEV.JS || A full Script for Creating Dev Tools
 * Made By: INovomiast
 * 
 * Learn more on https://DEV.JS.glitch.me/?redir=script
 */

const devKeys = ['inovo16022005accMain'];

//The thing that you wan't to be showed at the DevKey is Successful!
const dev_tools = document.getElementById('dev-tools');
const sep = document.getElementById('separator')

//Key Combination for Dev Tools Accesing
document.body.addEventListener('keydown', (event) => {
    if(event.ctrlKey && event.key === 'ñ'){
        const dev_access = prompt('Insert your DevCode before the tag devKey:', 'devKey:');
        if(dev_access === "devKey:" + devKeys[0]){
            alert('Access was succesful!');
            sep.style.display = 'block';
            dev_tools.style.display = 'block';
            dev_tools.style.animation = 'bounceInRight';
            dev_tools.style.animationDuration = '3s';
            
        }else{
            alert('Unexistant DevKey!');
        }
    }
})

//My work has a link genrator, with pre-made links, it's just a "Share Link Creator"
const share_link_tool = document.getElementById('');
const generate_link_btn = document.getElementById('');
const link_display = document.getElementById('');

const links = ['', '', ''];

//generate_link_btn.addEventListener('click', () => {
//   if (window.location.href === ""){
//       
//   }else if(window.location.href === ""){
//       
//   }else if(window.location.href === ""){
//       
//   }
//});