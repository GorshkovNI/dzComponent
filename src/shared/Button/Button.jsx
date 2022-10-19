import React from "react";
import styles from './Button.module.css'
import cn from 'classnames';
import { SvgSelector } from "../../SvgSelector";


export const buttonTypes = {
    buttonBig: 'buttonBig',
    buttonMedium: 'buttonMedium',
    buttonSmall: 'buttonSmall',

    primary: 'primary',
    delete: 'delete',
    secondary: 'secondary',
    secondaryBlack: 'secondaryBlack'
};

export const Button = (props) =>{

    const buttonClassName = cn(styles.button, {
        [styles.buttonBig]: props.size === buttonTypes.buttonBig,   
        [styles.buttonMedium]: props.size === buttonTypes.buttonMedium,   
        [styles.buttonSmall]: props.size === buttonTypes.buttonSmall, 

        [styles.primary]: props.action === buttonTypes.primary,
        [styles.secondary]: props.action === buttonTypes.secondary,
        [styles.secondaryBlack]: props.action === buttonTypes.secondaryBlack
    })

    let visibleText = (props.size === buttonTypes.buttonBig ? true : false || props.size === buttonTypes.buttonMedium ? true : false)
    let visibleIcon = (props.size === buttonTypes.buttonBig ? true : false || props.size === buttonTypes.buttonSmall ? true : false)
    
    return(
        <button className={buttonClassName}>
            {visibleIcon && <SvgSelector className={styles.buttonIcon} id={props.icon}/>}
            {visibleText && <span className={styles.area}>{props.text}</span>}
        </button>
    )
}