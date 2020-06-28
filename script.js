// generate random password

function generate() {

    //set password lenth/complexity
    let complexity = document.getElementById("slider").value;
    // pasword values
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567980!@#$%^&*()_+";

    let password = "";

    // create 4 loo to choose password char
    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to the text box and display
    document.getElementById("display").value = password;

    // add password to previousl gen password section
    document.getElementById("lastNums").innerHTML += password + "<br />";
}
    // site default length display of 25 
    document.getElementById("length").innerHTML = "length:25";

    // function length slider position
    document.getElementById("slider").oninput = function(){

        if(document.getElementById("slider").value > 0){
            document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;        
        }
        else{
            document.getElementById("length").innerHTML = "Length: 1";

        }
    }

