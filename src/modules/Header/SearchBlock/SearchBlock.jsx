import React from "react";
import { Button } from "../../../shared/Button/Button";
import { Search } from "../../../shared/Search/Search";
import { SearchContainer } from "../../../shared/Search/SearchContainer";
import styles from './SearchBlock.module.css'


export const SearchBlock = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.filter}>
                <SearchContainer />
                <Button size = 'big' action = 'primary' text = 'Фильтры' icon = 'filter'/>
                <Button size = 'medium' action = 'secondary' text = 'Сбросить фильтры' icon = ''/>
            </div>
            <Button size = 'big' action = 'secondary' text = 'Загрузка' icon = 'load'/>
        </div>
        
    )
}