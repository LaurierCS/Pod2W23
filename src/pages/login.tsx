// Mantine Library
import { TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
// Yup Validation Library
import * as Yup from 'yup';
// Tabler Icons
import { IconId, IconMail, IconEye } from '@tabler/icons-react';
// Styles | Images
import styles from '../styles/auth.module.css';

function Login() {
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
                    <form className={styles.userForm} onSubmit={form.onSubmit(() => {})}>
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
                            size="xl"
                            withAsterisk
                            rightSection={<IconEye className={styles.inputIcons} />}
                            {...form.getInputProps('password')} />
                        <div className={styles.authButtonContainer}>
                        <button className={styles.authButton} type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login