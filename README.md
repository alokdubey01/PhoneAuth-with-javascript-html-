# PhoneAuth-with-javascript-html-
Send otp on mobile number by using javascript in html/php website

# Open firebase console 
# Create a project
# Select web icon to get started with web page
# Open Authentication directory
# Enable Phone Verification and enter a frictional phone and otp

# Go to project setting and copy following cdn code

<!-- The core Firebase JS SDK is always required and must be listed first -->
<!-- <script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>  -->
<script src="https://www.gstatic.com/firebasejs/8.9.1/firebase.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries 
<script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-analytics.js"></script>
-->
<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "*************************",
    authDomain: "***********.firebaseapp.com",
    projectId: "*********",
    storageBucket: "*********.appspot.com",
    messagingSenderId: "123456789",
    appId: "*****************************",
    measurementId: "*-**************"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
</script>

# At the bottom side of your html/php file

# Now Download avobe code to apply them
