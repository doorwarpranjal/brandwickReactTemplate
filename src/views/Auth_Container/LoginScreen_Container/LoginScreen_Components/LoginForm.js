import React from 'react';
import styles from '../LoginScreen_styles/LoginForm.module.scss'


const LoginForm = () => {
    return (
        <div className={styles.formContainer}>

    
            <form>
                <label>Enter Name</label>
                <input className={styles.input} placeholder="enter name" type="text"/>
            </form>
        </div>
    );
}

export default LoginForm;
