
// LOGIN BUTTON CODE
function login(e){

var username=document.getElementById("user").value
var password=document.getElementById("pass").value

    alert("welcome to the "+ username);

}
// SHOW PASSWORD
function show(f){
 var  passwordfield=document.getElementById('pass')
 if(passwordfield.type ==="pass"){
 passwordfield.type="text";}
 else{
  passwordfield.type="pass"
 }


}


// forget password

function forget(f){
  f.style.color="red"

}

function submit(){
  alert("your password has  been changed succesfully")

}
