import React from "react";
import styles from './Dropdown.module.css'

export const Dropdown = (props) =>{
    return(
        <div className={styles.dropdown}>
            <ul className={styles.list}>
            <label>
                <li className={styles.item}>
                    <div className={styles.checkbox}>
                        <label className={styles.area}>
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
            </label>
            <label>
                <li className={styles.item}>
                    <div className={styles.checkbox}>
                        <label className={styles.area}>
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
                            <span className={styles.text}>Рассчет</span>
                        </label>
                    </div>
                </li>
            </label>
            <label>
                <li className={styles.item}>
                    <div className={styles.checkbox}>
                        <label className={styles.area}>
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
                            <span className={styles.text}>Подтвержден</span>
                        </label>
                    </div>
                </li>
            </label>
            <label>
                <li className={styles.item}>
                    <div className={styles.checkbox}>
                        <label className={styles.area}>
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
                            <span className={styles.text}>Отложен</span>
                        </label>
                    </div>
                </li>
            </label>
            <label>
                <li className={styles.item}>
                    <div className={styles.checkbox}>
                        <label className={styles.area}>
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
                            <span className={styles.text}>Выполнен</span>
                        </label>
                    </div>
                </li>
            </label>
            <label>
                <li className={styles.item}>
                    <div className={styles.checkbox}>
                        <label className={styles.area}>
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
                            <span className={styles.text}>Отменен</span>
                        </label>
                    </div>
                </li>
            </label>
            </ul>
        </div>
    )
}