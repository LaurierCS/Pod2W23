// Mantine Library
import { Flex, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
// Yup Validation Library
import * as Yup from 'yup';
// Styles | Images
import styles from '../styles/auth.module.css';

function Register() {
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
                                    error: styles.inputError,
                                }}
                                label="First Name" 
                                placeholder="First Name" 
                                size="md"
                                withAsterisk
                                {...form.getInputProps('firstName')} />
                            <TextInput 
                                classNames={{
                                    root: styles.inputRoot,
                                    label: styles.inputLabel,
                                    input: styles.inputField,
                                    error: styles.inputError,
                                }}
                                label="Last Name" 
                                placeholder="Last Name" 
                                size="md"
                                withAsterisk
                                {...form.getInputProps('lastName')} />
                        </Flex>
                        <TextInput 
                            classNames={{
                                root: styles.inputRoot,
                                label: styles.inputLabel,
                                input: styles.inputField,
                                error: styles.inputError,
                            }}
                            label="Email" 
                            placeholder="Email" 
                            size="md"
                            withAsterisk
                            {...form.getInputProps('email')} />
                        <TextInput 
                            classNames={{ 
                                root: styles.inputRoot,
                                label: styles.inputLabel,
                                input: styles.inputField,
                                error: styles.inputError,
                            }}
                            label="Password" 
                            placeholder="Password" 
                            size="md"
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