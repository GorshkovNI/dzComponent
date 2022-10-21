import React from "react";
import { SvgSelector } from "../../../SvgSelector";
import styles from './Input.module.css'
import cn from 'classnames'
import { useState } from "react";
import { Input } from "./Input";


export const InputContainer = (props) => {
    
    const[value, setValue] = useState('')

    let changeText = (e) =>{
        setValue(e.target.value) 
    }

    let deleteText = () =>{
        setValue('')
    }

   return(
       <Input 
        className={props.className}
        size={props.size}
        value={value}
        onChangeText={changeText}
        deleteText={deleteText}
       />
   ) 
}