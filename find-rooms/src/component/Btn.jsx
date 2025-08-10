import { useState } from 'react';
import '../styles/BtnCss.css'

function Btn({name,style}){
    return(
        <button style={style}>{name}</button>
    )
}

export default Btn;