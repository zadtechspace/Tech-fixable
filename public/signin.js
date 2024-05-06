
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
  import { getAuth, signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  
  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC-gWPz3o6ltUMg5_x6kXvpPu4hP19HvLQ",
    authDomain: "tech-fixable.firebaseapp.com",
    projectId: "tech-fixable",
    storageBucket: "tech-fixable.appspot.com",
    messagingSenderId: "310778062785",
    appId: "1:310778062785:web:f2217f6aa88b77ceb6b140"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);



//  signin section

signinbtn.addEventListener('click', (e)=>{

  e.preventDefault()
    let email = signinemail.value;
    let password = signinpassword.value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    alert("Success!")

    window.location.href= "dashboard.html"

    // ...
  })

 
  .catch((error) => {
    alert(error.message)
  });

  useremail.value =''
  userpassword.value ='';
 
})


