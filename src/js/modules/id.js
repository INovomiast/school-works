function generate(){
    var fP = (Math.random() * 50000) | 0;
    var sP = (Math.random() * 50000) | 0;
    fP = ('000' + fP.toString(36)).slice(-8);
    sP = ('000' + sP.toString(36)).slice(-8);
    const result = fP + sP;
    const id_display = document.getElementById('id_display');
    id_display.innerText = result;
}

function gen_new(){
    window.location.reload();
}

generate();
