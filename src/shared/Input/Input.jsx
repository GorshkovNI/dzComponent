import React from "react";
import { SvgSelector } from "../../SvgSelector";
import styles from './Input.module.css'
import cn from 'classnames'
import { useState } from "react";

const inputTypes = {
    normal: 'normal',
    incorrect: 'incorrect',
    disabled: 'disabled'
}


export const Input = ({
    className = inputTypes.incorrect
}) => {

    const[value, setValue] = useState('')

    const viewInput = cn(styles.input, {
        [styles.incorrect]: className === inputTypes.incorrect,
        [styles.disabled]: className === inputTypes.disabled
    })

    const styleIcon = cn({
        [styles.IconDisabled]: className === inputTypes.disabled,
        [styles.IconIncorrect]: className === inputTypes.incorrect,
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
                    onChange={changeText}
                />
                <button className={styles.buttonAction} onClick={deleteText}>
                    <SvgSelector className={`${styles.actionIcon} ${styleIcon}`} id={className}/>
                </button>
            </div>
        </div>
   ) 
}