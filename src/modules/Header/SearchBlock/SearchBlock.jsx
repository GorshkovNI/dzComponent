import React from "react";
import { Button } from "../../../shared/Button/Button";
import { Search } from "../../../shared/Search/Search";
import styles from './SearchBlock.module.css'


export const SearchBlock = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.filter}>
                <Search />
                <Button size = 'buttonBig' action = 'primary' text = 'Фильтры' icon = 'filter'/>
                <Button size = 'buttonMedium' action = 'secondary' text = 'Сбросить фильтры' icon = ''/>
            </div>
            <Button size = 'buttonBig' action = 'secondary' text = 'Загрузка' icon = 'load'/>
        </div>
        
    )
}