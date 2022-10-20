import React from "react";
import { Button } from "../../../shared/Button/Button";
import { Input } from "../../../shared/Input/Input";
import { Search } from "../../../shared/Search/Search";
import styles from './Filter.module.css'

export const FilterBlock = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.filters}>
                <div className={styles.infoBlock}>
                    <span className={styles.text}>Дата заказа</span>
                    <div className={styles.dateInput}>
                        <Input size='small' />
                        <Input size='small' />
                    </div>
                </div>
                <div className={styles.status}>
                    <Input size='medium' text='Статус заказа'/>
                </div>
                <div className={styles.infoBlock}>
                    <span className={styles.text}>Сумма заказа</span>
                    <div className={styles.dateInput}>
                        <Input size='lsmall' />
                        <Input size='lsmall' />
                    </div>
                </div>
                <div className={styles.button}>
                    <Button size = 'buttonBig' action = 'secondary' text = 'Светлая тема' icon = 'sun'/>
                </div>
            </div>
             
        </div>
    )
}