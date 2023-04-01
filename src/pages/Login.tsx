import react, {useState} from 'react';
import { initializeApp } from "firebase/app";
import {getDatabase, set, ref} from "firebase/database";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0uX-MWgWGDouhJJWLCejBNT3IfaNKVZI",
  authDomain: "expense-tracker-5b047.firebaseapp.com",
  databaseURL: "https://expense-tracker-5b047-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-5b047",
  storageBucket: "expense-tracker-5b047.appspot.com",
  messagingSenderId: "479377948780",
  appId: "1:479377948780:web:55b9af35e2518ce3d6d849",
  measurementId: "G-8HYESJ1JE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

export default function LoginPage() {
    const [enterEmail, setEmail] = useState('');
    const [enterPassword, setPassword] = useState('');

    const Login = () => {
    
        signInWithEmailAndPassword(auth, enterEmail, enterPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          const output = `Signed in as: ${enterEmail}`;
          alert(output)
        })
        .catch((error) => { //different error messages
          if (error == 'FirebaseError: Firebase: Error (auth/user-not-found).'){
            alert('Account does not exist')
          }
          else if (error == 'FirebaseError: Firebase: Error (auth/invalid-email).'){
            alert('Email entered not in proper format')
          }
          else if (error == 'FirebaseError: Firebase: Error (auth/internal-error).'){
            alert('No Password entered')
          }
          else {
            alert(error)
          }
        });
    }

    return(
        <div>
            <p>
                <b>Login</b>
                <br/>
                <input type='text' onChange={(e) => setEmail(e.target.value)} value={enterEmail} id='EnterEmail' placeholder='Email'/>
                <input type='password' onChange={(e) => setPassword(e.target.value)} value={enterPassword} id='EnterPassword' placeholder='Password'/>
                <br/>
                <button type='submit' onClick={Login} id='Login'>Submit</button>
            </p>
        </div>

    );
}