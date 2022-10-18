import React from "react";
import { SvgSelector } from "../../SvgSelector";
import styles from './Input.module.css'
import cn from 'classnames'
import { useState } from "react";


export const Input = (props) => {

    const[value, setValue] = useState('')

    const viewInput = cn(styles.input, {
        [styles.incorrect]: false,
        [styles.disabled]: true
    })

    let changeText = (e) =>{
        setValue(e.target.value) 
    }

    let deleteText = () =>{
        setValue('')
    }

   return(
        <div className={viewInput}>
            <label className={styles.inputLabel} for="incorrect">Дата и время заказа</label>
            <div className={styles.area}>
                <input
                    className={styles.text}
                    type="text"
                    placeholder="Введите"
                    value={value}
                    id="incorrect"
                    onChange={changeText}
                />
                <button className={styles.buttonAction} onClick={deleteText}>
                    <SvgSelector className={`${styles.actionIcon} ${styles.actionIconDisabled}`} id="disabled"/>
                </button>
            </div>
        </div>
   ) 
}