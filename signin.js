function signinjs(){

    valid=true;
    var v=true;

    const unam = document.getElementById('inputEmail3');
    const passw= document.getElementById('inputPassword3');

//---------------------------------------------------------//

if(unam.value.trim() === ''){
    valid = false;
    setErrorFor(unam, 'Username cannot be blank');
}else if (unam.value.trim()!="admin"){
    setErrorFor(unam, 'Not Valid');
    valid=false;
} 
else{
    setSuccessFor(unam," ");
}




if(passw.value.trim() === ''){
    valid = false;
    setErrorFor(passw, 'Password cannot be blank');
}else if (passw.value.trim()!="12345"){
    setErrorFor(passw, 'Not Valid');
    valid=false;
} 
else{
    setSuccessFor(passw," ");
}



if (v=valid){

};
return valid;

}





// ------------------------------------------------------//

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-co error';
    small.innerText = message;
  }
  
  function setSuccessFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-co success';
    small.innerText = message;
      
  }