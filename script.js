const validate = () => {
    const user = document.getElementById('userId');
    const password = document.getElementById('pass');
    const name1 = document.getElementById('name');
    const address = document.getElementById('address');
    const zip= document.getElementById('zip');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    //const email = document.getElementById('email');
    



if (user.value =='' ){
        user.style.border = '2px solid red';
        document.getElementById('userIdInvalid').style.visibility = 'visible';
    }
else if (user.value.length < 5 && user.value.length <= 12 ){
    alert('user name too short')
}

else{

}


 if (password.value ==''){
     password.style.border = '2px solid red';
     document.getElementById('passwordInvalid').style.visibility = 'visible';
 }
 if (name1.value ==''){
    name1.style.border = '2px solid red';
    document.getElementById('invalidName').style.visibility = 'visible';
};
if(/[^A-Za-z]/.test(name1)){
    document.getElementById('alphabet').style.visibility = 'visible'
}


if (address.value ==''){
    address.style.border = '2px solid red';
    document.getElementById('addressOptional').style.visibility = 'visible';
}
if (zip.value ==''){
    zip.style.border = '2px solid red';
}

if (email.value ==''){
    email.style.border = '2px solid red';
}
 
if (country.value ==''){
    document.getElementById('countrySelect').style.visibility = 'visible';
};


 
}