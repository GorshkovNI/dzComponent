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

export const Button = (
    {classNames = buttonTypes.buttonMedium,
    action = buttonTypes.secondaryBlack,
    text = 'Применить'}
) =>{

    const buttonClassName = cn(styles.button, {
        [styles.buttonBig]: classNames === buttonTypes.buttonBig,   
        [styles.buttonMedium]: classNames === buttonTypes.buttonMedium,   
        [styles.buttonSmall]: classNames === buttonTypes.buttonSmall, 

        [styles.primary]: action === buttonTypes.primary,
        [styles.secondary]: action === buttonTypes.secondary,
        [styles.secondaryBlack]: action === buttonTypes.secondaryBlack
    })

    let visibleText = (classNames === buttonTypes.buttonBig ? true : false || classNames === buttonTypes.buttonMedium ? true : false)
    let visibleIcon = (classNames === buttonTypes.buttonBig ? true : false || classNames === buttonTypes.buttonSmall ? true : false)
    
    return(
        <button className={buttonClassName}>
            {visibleIcon && <SvgSelector className={styles.buttonIcon} id='buttonIcon'/>}
            {visibleText && <span className={styles.area}>{text}</span>}
        </button>
    )
}