<link rel="stylesheet" href="cssoblig.css"></link>

function plsWork() {
    var x = document.getElementById('app2');
    if (x.style.opacity === "1") {
        x.style.opacity = "0";
        x.style.visibility = "hidden";
    } 
    else {
        x.style.opacity = "1";
        x.style.visibility = "visible";
    }
}

    function logins() { 

        confirm('thanks for letting me steal your email!');
    var x = document.getElementById('ups');
    if (x.style.opacity === "1") {
        x.style.opacity = "0";
        x.style.visibility = "hidden";
        } 
    else {
        x.style.opacity = "1";
        x.style.visibility = "visible";
    }
    }
    function ValidateTextBox() {
    if (document.getElementById("mailing").value.trim() == "") {
        alert("Please enter email/password!");
        return false;
    }
};