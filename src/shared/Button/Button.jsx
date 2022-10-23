import React from "react";
import styles from './Button.module.css'
import cn from 'classnames';
import { SvgSelector } from "../../SvgSelector";
import { VisibleContext } from "../../modules/Header/Header";



export const buttonTypes = {
    big: 'big',
    medium: 'medium',
    small: 'small',

    primary: 'primary',
    delete: 'delete',
    secondary: 'secondary',
    secondaryBlack: 'secondaryBlack'
};

export const Button = (props) =>{

    const buttonClassName = cn(styles.button, {
        [styles.big]: props.size === buttonTypes.big,   
        [styles.medium]: props.size === buttonTypes.medium,   
        [styles.small]: props.size === buttonTypes.small, 

        [styles.primary]: props.action === buttonTypes.primary,
        [styles.secondary]: props.action === buttonTypes.secondary,
        [styles.secondaryBlack]: props.action === buttonTypes.secondaryBlack
    })

    let visibleText = (props.size !== buttonTypes.small ? true : false)
    let visibleIcon = (props.size !== buttonTypes.medium ? true : false)
    return(
        <VisibleContext.Consumer>
            {({toggleFilter}) =>(
                <button className={buttonClassName} onClick={toggleFilter}>
                    {visibleIcon && <SvgSelector className={styles.buttonIcon} id={props.icon}/>}
                    {visibleText && <span className={styles.area}>{props.text}</span>}
                </button>
            )}
        </VisibleContext.Consumer>
    )
    
}
