import React from "react";
import TabsNavigation from "../TabsNavigation";
import SideBar from "../SideBar";
import styles from './promo.module.css'
import RecommendationsCard from "../RecommendationsCard";

const Promo: React.FC = () => {
    return (
        <div className={styles.wrapper} >
            <SideBar/>
            <div style={{display: 'flex', flexDirection: 'column'}} >
                <TabsNavigation/>
                <RecommendationsCard/>
            </div>
        </div>
    );
};

export default Promo;
