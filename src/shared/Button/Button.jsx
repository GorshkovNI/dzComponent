import React from "react";
import styles from './Button.module.css'
import cn from 'classnames';
import { SvgSelector } from "../../SvgSelector";

export const Button = () =>{
    const buttonClassSize = cn(styles.button, {
        [styles.buttonBig]: false,
        [styles.buttonMedium]: true,    
        [styles.buttonSmall]: false,    
    })
    const buttonClassColor = cn({  
        [styles.buttonBlue]: true,
        [styles.buttonTransparentBlue]: false,
        [styles.buttonTransparentBlack]: false
    })

    return(
        <button className={`${buttonClassSize} ${buttonClassColor}`}>
            {buttonClassSize.indexOf(styles.buttonMedium) !== -1 ? '' : <SvgSelector className={styles.buttonIcon} id='buttonIcon'/>}
            {buttonClassSize.indexOf(styles.buttonSmall) !== -1 ? '' : <span className={styles.area}>Text here</span>}
        </button>
    )
}