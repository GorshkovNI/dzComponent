import React from "react";
import styles from './Dropdown.module.css'

const noop = () => {}

export const Dropdown = (props, onShowText = noop) =>{
    return(
        <div className={styles.dropdown}>
            <ul className={styles.list} onChange={props.showText}>

                    <li className={styles.item}>
                        <div className={styles.checkbox}>
                            <label className={styles.area} onClick={props.onShowText}>
                                <input className={styles.input} type="checkbox" />
                                    <svg
                                        className={styles.icon}
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                                        stroke="none"
                                        />
                                    </svg>
                                <span className={styles.text}>Новый</span>
                            </label>
                        </div>
                    </li>
            
            </ul>
        </div>
    )
}