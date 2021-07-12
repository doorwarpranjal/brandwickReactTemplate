import React from 'react';
import LoginForm from './LoginScreen_Components/LoginForm'
import styles from './LoginScreen_styles/LoginScreen.module.scss'

const LoginScreen = () => {
    return (
        <div>
            This is login Screen



            <h2 className={styles.heading} >Login Form</h2>
            <br/>

        <LoginForm/>



        </div>
    );
}

export default LoginScreen;
