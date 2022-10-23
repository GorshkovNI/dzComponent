import React from "react";
import { SvgSelector } from "../../../SvgSelector";
import styles from './Input.module.css'
import cn from 'classnames'


const noop = () => {}

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

export const Input = ({
    onChangeText = noop,
    deleteText = noop,
    ...props
}) => {
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

    const styleIcon = cn(styles.actionIcon,{
        [styles.IconNormal]: props.className === inputTypes.normal,
        [styles.IcoDisabled]: props.className === inputTypes.disabled,
        [styles.IconIncorrect]: props.className === inputTypes.incorrect,
    })


   return(
        <div className={viewInput}>
            <div className={areaSize}>
                <input
                    className={styles.text}
                    type="text"
                    placeholder="Введите"
                    value={props.value}
                    onChange={onChangeText}
                />
                <button className={styles.buttonAction} onClick={deleteText}>
                    <SvgSelector className={styleIcon} id='close' />
                </button>
            </div>
        </div>
   ) 
}