//Redirect Function
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const redir_from = urlParams.get('redirect_from');

if(redir_from === 'gmail'){
    console.log('Redirected From Gmail')
}