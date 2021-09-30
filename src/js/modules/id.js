function generate(cq){
    var fP = (Math.random() * 50000) | 0;
    var sP = (Math.random() * 50000) | 0;
    fP = ('000' + fP.toString(36)).slice(-3);
    sP = ('000' + sP.toString(36)).slice(-3);
    console.log(fP + sP);
}

generate();