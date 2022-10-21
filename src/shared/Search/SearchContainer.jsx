import React, { useState } from "react";
import { Search } from "./Search";

export const SearchContainer = (props) => {

    const [isActive, setIsActive] = useState(false)
    const [value, setValue] = useState('')
 
    let checkedEmpty = (e) =>{ 
        e.target.value === '' ? setIsActive(false) :  setIsActive(true)
        setValue(e.target.value)
    }

    let deleteText = (e) =>{
        setIsActive(false)
        setValue('')
    }

    return(
        <Search 
            status={isActive} 
            value={value} 
            onCheckedEmpty={checkedEmpty} 
            deleteText={deleteText} 
        />
    )
}