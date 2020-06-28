// generate random password

function generate(){

    //set password lenth/complexity
    let complexity = document.getElementById("slider").value;
    // pasword values
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567980!@#$%^&*()_+";

    let password = "";

    // create 4 loo to choose password char

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to the text box and display
    document.getElementById("display").value = password;

}