//Redirect Function
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const redir_from = urlParams.get('redirect_from');
const email = urlParams.get('email');


const mails = ["juanfrancisco.medina@salesianos.edu", "joseantonio.perez@salesianos.edu", ""]

if(redir_from === 'gmail' && email === mails[0]){
    console.log(`Redirected From Gmail || Clicked by: ${mails[0]}`)
}