import React from "react";
import styles from './Header.module.css'
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { SearchBlock } from "./SearchBlock/SearchBlock";

export const Header = () => {
    return(
        <div className={styles.wrapper}>
            <InfoBlock />
            <SearchBlock />
        </div>
        
    )
}