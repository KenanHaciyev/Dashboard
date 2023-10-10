import React from 'react';
import styles from './header.module.css'
import logo from './img/logo.png'

const Header: React.FC = () => {
    return (
        <header className={styles.header} >
            <div className={styles.logo} >
                <img className={styles.image} src={logo} alt="logo"/>
               <h3> Haven Diagnostics</h3>
            </div>
            <h1 className={styles.title} >
                Dashboard
            </h1>
        </header>
    );
};

export default Header;
