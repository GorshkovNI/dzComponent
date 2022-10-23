import React from "react";
import { useState } from "react";
import { InputDropdown } from "./InputDropdown";

export const StateContext = React.createContext();

export const InputDropdownContainer = (props) => {

    const [visible, setVisible] = useState(true)
    const [value, setValue] = useState('Любой')
    
    const handleIsVisible = (e) => {
        setVisible(!visible)
    }

   return(
    <StateContext.Provider value={{returnText: (e)=>{setValue(e.target.value)}}}>
        <InputDropdown 
            size={props.size} 
            isVisible={handleIsVisible} 
            visible={visible}
            value={value}
        />
    </StateContext.Provider>   
   ) 
}