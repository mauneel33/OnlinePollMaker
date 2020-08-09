window.onload = function() {
    document.loginForm.usr.focus();
}
function validate(){
    var usnm = document.loginForm.usr.value;
    var pass = document.loginForm.pasw.value;
    if(usnm=="user1" && pass=="user10702")
    {
        location.href="https://mauneel33.github.io/OnlinePollMaker/addpoll.html";
    }
    else{
            document.loginForm.usr.value = ""
            document.loginForm.pasw.value = ""
            window.alert("Incorrect Credentials!");
            document.loginForm.usr.focus();       
    }
}
function goback(){
    window.history.back();
}
