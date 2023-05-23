// Next Library
import { useRouter } from 'next/router';
// Mantine Library
import { Flex, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
// Firebase
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import app from '../scripts/firebase/config';
// Yup Validation Library
import * as Yup from 'yup';
// Tabler Icons
import { IconId, IconMail, IconEye } from '@tabler/icons-react';
// Styles | Images
import styles from '../styles/auth.module.css';

const auth = getAuth(app);

function Register() {
    const router = useRouter();

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

    const userRegister = async () => {
        const { firstName, lastName, email, password } = form.values;

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push('/login')
        } catch (error) {
            console.log('error');
        }
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
                                    rightSection: styles.inputRightSection,
                                    error: styles.inputError,
                                }}
                                label="First Name" 
                                placeholder="First Name" 
                                size="lg"
                                withAsterisk
                                rightSection={<IconId className={styles.inputIcons} />}
                                {...form.getInputProps('firstName')} />
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
                                rightSection={<IconId className={styles.inputIcons} />}
                                {...form.getInputProps('lastName')} />
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
                            rightSection={<IconMail className={styles.inputIcons} />}
                            {...form.getInputProps('email')} />
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
                            rightSection={<IconEye className={styles.inputIcons} />}
                            {...form.getInputProps('password')} />
                        <div className={styles.authButtonContainer}>
                        <button className={styles.authButton} onClick={userRegister} type="submit">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register