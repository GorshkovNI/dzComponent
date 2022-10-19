import React from "react";
import { useState } from "react";
import { SvgSelector } from "../../SvgSelector";
import styles from "./Search.module.css"


export const Search = (props) => {

    const [status, setStatus] = useState(false)
    const [value, setValue] = useState('')
    
    let checkEmpty = (e) =>{
        e.target.value === '' ? setStatus(false) :  setStatus(true)
        setValue(e.target.value)
    }

    let deleteText = (e) =>{
        setStatus(false)
        setValue('')
    }
    
    return(
        <div className={styles.searchbar}>
            <div className={styles.area}>
                <SvgSelector className={styles.icon} id='search'/>
                <input
                    className={styles.text}
                    type="text"
                    placeholder="Номер заказа или ФИО"
                    value={value}
                    onChange={checkEmpty}
                />
                {status && <button className={styles.searchButtonClose}>
                        <svg
                            className={`${styles.buttonIcon} ${styles.iconClose}`}
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="#8055FF"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={deleteText}
                            >
                            <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
                        </svg>
                </button>
                }
            </div>
        </div>
    )
}