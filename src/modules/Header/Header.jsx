import React from "react";
import { FilterBlock } from "./FilterBlock/Filter";
import styles from './Header.module.css'
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { SearchBlock } from "./SearchBlock/SearchBlock";

export const Header = () => {
    return(
        <div className={styles.wrapper}>
            <InfoBlock />
            <SearchBlock />
            <FilterBlock />
        </div>
        
    )
}