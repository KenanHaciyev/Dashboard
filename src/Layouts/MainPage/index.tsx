import React from 'react';
import styles from './mainPage.module.css'
import Header from "../../components/Header";
import Promo from "../../components/Promo";

const MainPage: React.FC = () => {
    return (
        <div className={styles.main} >
            <Header/>
            <Promo/>
        </div>
    );
};

export default MainPage;
