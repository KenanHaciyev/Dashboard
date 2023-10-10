import React from "react";
import styles from './promo.module.css'
import RecommendationsCard from "../RecommendationsCard";

const Promo: React.FC = () => {
    return (
        <div className={styles.wrapper} >
                <RecommendationsCard/>
        </div>
    );
};

export default Promo;
