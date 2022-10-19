import React from "react";
import { SvgSelector } from "../../../SvgSelector";
import styles from './InfoBlock.module.css'
import { Button } from "../../../shared/Button/Button";

export const InfoBlock = (props) => {
    return(
        <div className={styles.wrapper}>
            <span className={styles.label}>Список заказов</span>
            <Button size = 'buttonBig' action = 'secondary' text = 'Светлая тема' icon = 'sun'/>
        </div>
    )
}