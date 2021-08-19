window.onload=function(){
     render();
}

function render(){
     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
     recaptchaVerifier.render();
}


function phoneAuth(){
     
     var phone_number = document.getElementById('phone').value;

     firebase.auth().signInWithPhoneNumber(phone_number, window.recaptchaVerifier)
      .then(function(confirmationResult){
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      console.log(coderesult);
      alert("message sent");
      // ...
    }).catch(function(error){
      // Error; SMS not sent
      alert(error.message);
    });
}


function verifyNumber(){
     var code = document.getElementById('verifycode').value;

         coderesult.confirm(code).then(function(result){
  // User signed in successfully.
         var user = result.user;
         console.log(user);
         alert('Success register');
  // ...
         }).catch(function(error){
          alert(error.message);
         });
}