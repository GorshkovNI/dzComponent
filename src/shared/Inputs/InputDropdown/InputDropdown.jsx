import React from "react";
import { SvgSelector } from "../../../SvgSelector";
import styles from './InputDropdown.module.css'
import cn from 'classnames'
import { useState } from "react";
import { Dropdown } from "../../Dropdown/Dropdown";

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



export const InputDropdown = (props) => {

    const [visible, setVisible] = useState(true)
    const [text, setText] = useState('')

    const sText = (e) =>{
        setText(e)
        console.log(text)
    }

    const isVisible = (e) => {
        setVisible(!visible)
    }

    const areaSize = cn(styles.area, {
        [styles.default]: areaTypes.default === props.size,
        [styles.medium]: areaTypes.medium === props.size,
        [styles.small]: areaTypes.small === props.size,
        [styles.lsmall]: areaTypes.lsmall === props.size
    })

    let showText = (e) =>{
        const {name, checked} = e.target
        console.log(name, checked)
    }

   return(
        <div className={styles.input} onClick={isVisible}>
            <div className={areaSize}>
                <input
                    className={styles.text}
                    type="text"
                    placeholder="Введите"
                    value=''
                />
                <button className={styles.buttonAction} >
                    <SvgSelector className={styles.actionIcon} id='arrow'/>
                </button>
                <div className={`${styles.dropdown} ${visible ? styles.active : ''}`}>
                    <Dropdown showText = {showText} onShowText = {sText}/>
                </div>
            </div>
        </div>
   ) 
}