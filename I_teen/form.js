
function validate(){
	var name = document.forms["myForm"]["name"];
	var surname = document.forms["myForm"]["surname"]; 
	var birthday = document.forms["myForm"]["birthday"]; 
	var email = document.forms["myForm"]["email"]; 
	var phone = document.forms["myForm"]["telephone"]; 
	var address = document.forms["myForm"]["address"]; 
	var kombesi = document.forms["myForm"]["kombesi"]; 	  
	var gjinia = document.getElementById("gjini").required;
	
	if (name.value ==""){
		window.alert("Please enter name!");
		name.focus();
		return false;
	}
	
	if (surname.value == "")                                  
    { 
        window.alert("Please enter your Surname."); 
        surname.focus(); 
        return false; 
    } 
   
	if (birthday.value == "")                                  
    { 
        window.alert("Please enter your Birthday."); 
        birthday.focus(); 
        return false; 
    } 
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 

    if (kombesi.selectedIndex < 1)                  
    { 
        alert("Please enter your course."); 
        kombesi.focus(); 
        return false; 
    } 
   
    return true; 
}



function kontrollopassword(){
	 var password = document.getElementById('password1');
    var confirm  = document.getElementById('password2');
    //Store the Confirmation Message Object ...
    var message = document.getElementById('confirm-message2');
    //Set the colors we will be using ...
    var good_color = "#66cc66";
    var bad_color  = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(password.value == confirm.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        confirm.style.backgroundColor = good_color;
        message.style.color           = good_color;
        message.innerHTML             = "Passwords Match!";
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        confirm.style.backgroundColor = bad_color;
        message.style.color           = bad_color;
        message.innerHTML             = "Passwords Do Not Match!";
    }
}


function func(x){
if(x==0)
document.getElementById('create').style.display='block';
else{
document.getElementById('create').style.display='none';
}
}