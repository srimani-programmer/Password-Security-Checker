
function securityCheck(){

    var password = document.getElementById("password").value;
    var res = ' ';
    if(password.length == 1){
        res = 'Easy to Hack';
    }else{
        res = 'Difficult to Hack';
    }

    document.getElementById('result').innerHTML = res;
}

$(document).ready(function(){
    $(document).keydown(function(e){
            securityCheck();
        });
});