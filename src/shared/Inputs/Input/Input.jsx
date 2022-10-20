import React from "react";
import { SvgSelector } from "../../../SvgSelector";
import styles from './Input.module.css'
import cn from 'classnames'
import { useState } from "react";

const inputTypes = {
    normal: 'normal',
    incorrect: 'incorrect',
    disabled: 'disabled'
}

const areaTypes = {
    default: '',
    small: 'small',
    medium: 'medium',
    lsmall: 'lsmall'
}



export const Input = (props) => {

    const[value, setValue] = useState('')

    const viewInput = cn(styles.input, {
        [styles.incorrect]: props.className === inputTypes.incorrect,
        [styles.disabled]: props.className === inputTypes.disabled,
    })

    const areaSize = cn(styles.area, {
        [styles.default]: areaTypes.default === props.size,
        [styles.medium]: areaTypes.medium === props.size,
        [styles.small]: areaTypes.small === props.size,
        [styles.lsmall]: areaTypes.lsmall === props.size
    })

    const styleIcon = cn({
        [styles.IconDisabled]: props.className === inputTypes.disabled,
        [styles.IconIncorrect]: props.className === inputTypes.incorrect,
    })

    let changeText = (e) =>{
        setValue(e.target.value) 
    }

    let deleteText = () =>{
        setValue('')
    }

   return(
        <div className={viewInput}>
            <div className={areaSize}>
                <input
                    className={styles.text}
                    type="text"
                    placeholder="Введите"
                    value={value}
                    onChange={changeText}
                />
                <button className={styles.buttonAction} onClick={deleteText}>
                    <SvgSelector className={`${styles.actionIcon} ${styleIcon}`} id={props.className}/>
                </button>
            </div>
        </div>
   ) 
}