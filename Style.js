function validateForm() {
    var name = document.forms["myForm"]["name"];
    var surname = document.forms["myForm"]["surname"];
    var email = document.forms["myForm"]["email"];
    var date = document.forms["myForm"]["date"];
    var phonenumber = document.forms["myForm"]["phonenumber"];
    var subject = document.forms["myForm"]["subject"];

    if (name.value == "") {
        document.getElementById("warning").innerHTML = "name must be filled out";
        name.style.borderColor = "red";
        return false;

    }
    if (surname.value == "") {
        document.getElementById("warning").innerHTML = "surname must be filled out";
        surname.style.borderColor = "red";

      
        return false;

    }
    if (email.value == "") {
        document.getElementById("warning").innerHTML = "Email must be filled out";
        email.style.surname = "red";

        return false;

    }
    if (!(/^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+[.])+[a-z]{2,5}$/.test(email.value))) {
        document.getElementById("warning").innerHTML = "email format is wrong";
        email.style.borderColor = "red";

        return false;


    }
    if (date.value == "") {
        document.getElementById("warning").innerHTML = "Date must be filled out";
        date.style.borderColor = "red";

        return false;

    }
  
    if (phonenumber.value == "") {
        document.getElementById("warning").innerHTML = "Phonenumber must be filled out";
        phonenumber.style.borderColor = "red";

        return false;

    }
    
    
    if (!(/^([+994])+(50|55|51|77|70|90|99|12|10|60)+[0-9]{7}/.test(phonenumber.value))) {
        
        document.getElementById("warning").innerHTML = "Phonenumber format is wrong ";
        phonenumber.style.borderColor = "red";

            return false;
        }
    if (subject.value == "") {
        document.getElementById("warning").innerHTML = "Subject must be filled out";
        phonenumber.style.borderColor = "red";

        return false;

    }
}
