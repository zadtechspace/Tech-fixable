

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 
  // import { getDatabase } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
 
  import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
 
  import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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
  const db = getFirestore(app);
  const auth = getAuth();
  const docRef = collection(db, "users")
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  
getStartedBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  let userEmail = useremail.value

  let userPassword = userpassword.value
  
    // To signup new Users
  createUserWithEmailAndPassword(auth, userEmail, userPassword)
  .then((userCredential) => {
 
    const user = userCredential.user;
    alert('Successfully Signed Up...')

    window.location.href= "signin.html"

    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message);
  });

  useremail.value =''
  userpassword.value ='';
 

  // To store user info to Firestore

addDoc(docRef,{
  email : userEmail,
  password: userPassword
})
.catch((e)=>{
  alert(err.message)
})

})

googlebtn.addEventListener('click', (e)=>{
  e.preventDefault();

  signInWithPopup(auth, googleProvider)

  .then(()=>{
    
  })
 
})

facebookbtn.addEventListener('click', (e)=>{

  e.preventDefault();

  signInWithPopup(facebookProvider)


})

// signinbtn.addEventListener('click',(e)=>{
//   alert("Hello world")
// })


// btn1.addEventListener('click',(e)=>{
//   alert("hello world")
// })

// btn1=(e)=>{

//   e.preventDefault()
//   alert('Hello world')
// }





























    
  

       
        
    