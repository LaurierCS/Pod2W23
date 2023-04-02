import react, {useState} from 'react';
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

// Mantine Library
import { TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
// Yup Validation Library
import * as Yup from 'yup';
// Tabler Icons
import { IconId, IconMail, IconEye } from '@tabler/icons-react';
// Styles | Images
import styles from '../styles/auth.module.css';

//Firebase credentials
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
const auth = getAuth(app);


//Login authentication function
function Login() {
    const [enterEmail, setEmail] = useState('');
    const [enterPassword, setPassword] = useState('');

    const Login = () => { //When called, logs user into account, if it exists
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


    // Validation
    let userSchema = Yup.object({
        email: Yup.string().required('Invalid email').email('Invalid email'),
        password: Yup.string().min(8, 'Invalid password').max(16, 'Invalid password'),
    });

    const form = useForm({
        initialValues: {
          email: '',
          password: ''
        },
    
        validate: yupResolver(userSchema),
    })

    return  (
        <>
            <div className={styles.authBackground}>
                <div className={styles.topbar}>
                    <a href="/">
                        <div className={styles.topbarBrand}>
                            <div className={styles.topbarLogo}>
                                <span className={styles.circle}></span>
                                <span className={styles.circle}></span>
                            </div>
                            <h1>ExTracker</h1>
                        </div>
                    </a>
                </div>
                <div className={`${styles.authContainer} ${styles.authContainerLogin}`}>
                    <div className={styles.authHero}>
                        <h3>WELCOME BACK!</h3>
                        <h1>Sign In</h1>
                        <h3>Not a member? <span><a href="/register">Register</a></span></h3>
                    </div>
                    <div className={styles.userForm}>
                        <TextInput 
                            classNames={{
                                root: styles.inputRoot,
                                label: styles.inputLabel,
                                input: styles.inputField,
                                rightSection: styles.inputRightSection,
                                error: styles.inputError,
                            }}
                            label="Email" 
                            placeholder="Email" 
                            size="xl"
                            withAsterisk
                            rightSection={<IconMail className={styles.inputIcons} />}
                            onChange={(e) => setEmail(e.target.value)} value={enterEmail} />
                        <TextInput 
                            classNames={{ 
                                root: styles.inputRoot,
                                label: styles.inputLabel,
                                input: styles.inputField,
                                rightSection: styles.inputRightSection,
                                error: styles.inputError,
                            }}
                            label="Password" 
                            placeholder="Password" 
                            size="xl"
                            withAsterisk
                            rightSection={<IconEye className={styles.inputIcons} />}
                            onChange={(e) => setPassword(e.target.value)} value={enterPassword} />
                        <div className={styles.authButtonContainer}>
                        <button className={styles.authButton} onClick={Login}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login