// Mantine Library
import { useForm, yupResolver } from '@mantine/form';
import { TextInput } from '@mantine/core';
// Yup Validation Library
import * as Yup from 'yup';
// Styles | Images
import styles from '../styles/auth.module.css';

function Register() {
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
                        <h3>Already A Member? <span>Log in</span></h3>
                    </div>
                    <form className={styles.userForm} onSubmit={form.onSubmit(() => {})}>
                        <div className={styles.nameForm}>
                            <TextInput 
                                classNames={{ 
                                    label: styles.inputLabel,
                                    input: styles.inputField,
                                    error: styles.inputError,
                                }}
                                label="First Name" 
                                placeholder="First Name" 
                                size="lg"
                                withAsterisk
                                {...form.getInputProps('firstName')} />
                            <TextInput 
                                classNames={{ 
                                    label: styles.inputLabel,
                                    input: styles.inputField,
                                    error: styles.inputError,
                                }}
                                label="Last Name" 
                                placeholder="Last Name" 
                                size="lg"
                                withAsterisk
                                {...form.getInputProps('lastName')} />
                        </div>
                        <TextInput 
                            classNames={{ 
                                label: styles.inputLabel,
                                input: styles.inputField,
                                error: styles.inputError,
                            }}
                            label="Email" 
                            placeholder="Email" 
                            size="lg"
                            withAsterisk
                            {...form.getInputProps('email')} />
                        <TextInput 
                            classNames={{ 
                                label: styles.inputLabel,
                                input: styles.inputField,
                                error: styles.inputError,
                            }}
                            label="Password" 
                            placeholder="Password" 
                            size="lg"
                            withAsterisk
                            {...form.getInputProps('password')} />
                        
                        <div className={styles.regButtonContainer}>
                        <button className={styles.regButton} type="submit">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register