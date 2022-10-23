import React, { useState, useCallback } from "react";
import { FilterBlock } from "./FilterBlock/FilterBlock";
import styles from './Header.module.css'
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { SearchBlock } from "./SearchBlock/SearchBlock";

export const VisibleContext = React.createContext();


export const Header = () => {

const [isVisible, setIsVisible] = useState(false)

const onChange = useCallback(() => {
    setIsVisible(!isVisible)
});

    return(
        <VisibleContext.Provider value={{toggleFilter: onChange}}>
            <div className={styles.wrapper}>
                <InfoBlock />
                <SearchBlock />
                {isVisible && <FilterBlock />}
            </div>
        </VisibleContext.Provider>  
    )
}