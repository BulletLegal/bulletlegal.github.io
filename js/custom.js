// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();


function validateSubmit(){
    var first_namme = document.getElementById("first_name");
    if(first_namme.required)
    {
        debugger;
        if(first_namme.validity.typeMismatch || first_namme.value == ""){  
            first_namme.setCustomValidity("'" + first_namme.value + "' is not a Valid Name.");  
            document.getElementById("first_name_desc").style.display = "block";
        }  
        else {  
            first_namme.setCustomValidity(""); 
            document.getElementById("first_name_desc").style.display = "none"; 
        }  
    }
    var last_namme = document.getElementById("last_name");
    if(last_namme.required)
    {
        if(last_namme.validity.typeMismatch || last_namme.value == ""){  
            last_namme.setCustomValidity("'" + last_namme.value + "' is not a Valid Name.");  
            document.getElementById("last_name_desc").style.display = "block";
        }  
        else {  
            last_namme.setCustomValidity("");  
            document.getElementById("last_name_desc").style.display = "none";
        }  
    }
    var email = document.getElementById("email");
    if(email.required)
    {
        if(email.validity.typeMismatch || email.value == ""){  
            email.setCustomValidity("'" + email.value + "' is not a Valid Email.");  
            document.getElementById("email_desc").style.display = "block";
        }  
        else {  
            email.setCustomValidity(""); 
            document.getElementById("email_desc").style.display = "none"; 
        }  
    }
    var phone = document.getElementById("phone");
    if(phone.required)
    {
        if(phone.validity.typeMismatch || phone.value == ""){  
            phone.setCustomValidity("'" + phone.value + "' is not a Valid Phone.");  
            document.getElementById("phone_desc").style.display = "block";
        }  
        else {  
            phone.setCustomValidity(""); 
            document.getElementById("phone_desc").style.display = "none"; 
        }  
    }
    var address = document.getElementById("address");
    if(address.required)
    {
        if(address.validity.typeMismatch || address.value == ""){  
            address.setCustomValidity("'" + address.value + "' is not a Valid Address.");  
            document.getElementById("address_desc").style.display = "block";
        }  
        else {  
            address.setCustomValidity("");  
            document.getElementById("address_desc").style.display = "none";
        }  
    }
    var message = document.getElementById("message");
    if(message.required)
    {
        if(message.validity.typeMismatch || message.value == ""){  
            message.setCustomValidity("'" + message.value + "' is not a Valid Message.");  
            document.getElementById("message_desc").style.display = "block";
        }  
        else {  
            message.setCustomValidity("");
            document.getElementById("message_desc").style.display = "block";  
        }  
    }
}