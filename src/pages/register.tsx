import react, {useState} from 'react';
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

// Mantine Library
import { Flex, TextInput } from '@mantine/core';
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

//Registration functions
function Register() {
    const [createEmail, newEmail] = useState('');
    const [createPassword, newPassword] = useState('');

    //Sign Up function -- Called when user clicks submit when new account credentials are entered
    const SignUp = () => {
        createUserWithEmailAndPassword(auth, createEmail, createPassword) //create new account using firebase build in auth functions
        .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        alert('new account created')
        })
        .catch((error) => { //different error messages
        if (error == 'FirebaseError: Firebase: Error (auth/invalid-email).'){
            alert('Email entered not in proper format')
        }
        else if (error == 'FirebaseError: Firebase: Error (auth/internal-error).'){
            alert('No Password entered')
        }
        else if (error == 'FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).'){
            alert('Password must be a least 6 characters')
        }
        else {
            alert(error)
        }

        // Validation
        let userSchema = Yup.object({
            firstName: Yup.string().required('First name is a required field'),
            lastName: Yup.string().required('Last name is a required field'),
            email: Yup.string().required('Email is a required field').email('Email must be valid'),
            password: Yup.string().min(8, 'Password must be between 8-16 characters').max(16, 'Password must be between 8-16 characters'),
        });

        const form = useForm({
            initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
            },
        
            validate: yupResolver(userSchema),
        })
        });
    }

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
                <div className={styles.authContainer}>
                    <div className={styles.authHero}>
                        <h3>START FOR FREE</h3>
                        <h1>Create New Account</h1>
                        <h3>Already a member? <span><a href="/login">Log in</a></span></h3>
                    </div>
                    <div className={styles.userForm}>
                        <Flex
                            className={styles.flexbox}
                            justify="flex-start"
                            align="center"
                            gap="50px"
                        >
                            <TextInput 
                                classNames={{
                                    root: styles.inputRoot,
                                    label: styles.inputLabel,
                                    input: styles.inputField,
                                    rightSection: styles.inputRightSection,
                                    error: styles.inputError,
                                }}
                                label="First Name" 
                                placeholder="First Name" 
                                size="lg"
                                withAsterisk
                                rightSection={<IconId className={styles.inputIcons} />} />
                            <TextInput 
                                classNames={{
                                    root: styles.inputRoot,
                                    label: styles.inputLabel,
                                    input: styles.inputField,
                                    rightSection: styles.inputRightSection,
                                    error: styles.inputError,
                                }}
                                label="Last Name" 
                                placeholder="Last Name" 
                                size="lg"
                                withAsterisk
                                rightSection={<IconId className={styles.inputIcons} />} />
                        </Flex>
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
                            size="lg"
                            withAsterisk
                            rightSection={<IconMail className={styles.inputIcons} />} onChange={(e) => newEmail(e.target.value)} value={createEmail} />
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
                            size="lg"
                            withAsterisk
                            rightSection={<IconEye className={styles.inputIcons} />} onChange={(e) => newPassword(e.target.value)} value={createPassword} />
                        <div className={styles.authButtonContainer}>
                        <button className={styles.authButton} onClick={SignUp}>Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register