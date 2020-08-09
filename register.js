
window.onload = function focus(){
    document.registerForm.fname.focus();
}
function goback(){
    window.history.back();
}
function validate(){
    var fname = document.registerForm.fname.value;
    var lname = document.registerForm.lname.value;
    var email = document.registerForm.email.value;
    var pass1 = document.registerForm.pass1.value;
    var pass2 = document.registerForm.pass2.value;
    if(!(/^[a-zA-Z]+$/.test(fname)))
    {
        window.alert("Please enter valid First Name");
        document.registerForm.fname.value = "";
        focus();
        return;
    }
    if(!(/^[a-zA-Z]+$/.test(lname)))
    {
        window.alert("Please enter valid Last Name");
        document.registerForm.lname.value = "";
        document.registerForm.lname.focus();
        return;
    }
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email))
    {
        window.alert("Please enter valid Email-ID");
        document.registerForm.email.value = "";
        document.registerForm.email.focus();
        return;
    }
    if(pass1.length < 6 || pass1.length > 11)
    {
        window.alert("Password needs to be of 6 to 11 char only!");
        document.registerForm.pass1.value = "";
        document.registerForm.pass1.focus();
        return;
    }
    if(pass1 != pass2)
    {
        window.alert("Password and Confirm Password are not matching!");
        document.registerForm.pass2.value = "";
        document.registerForm.pass2.focus();
        return;
    }
    location.href = "login.html";
}