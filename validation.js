function validateform(form){
    
  // var val=document.getElementById("username");
    var uname=form.username.value;
    var email=form.email.value;
    var email_re=/\S+@\S+\.\S+/;
   if(uname.length<7)
   {
       alert("invalid username");
       return false;
   }
   else if(email_re.test(email)==false){
       alert("please enter a valid mail");
       return false;
   }
   var val = phone.value;
if (/^\d{10}$/.test(val)) {
    // value is ok, use it
} else {
    alert("Invalid number; must be ten digits")
    number.focus()
    return false;
}
}