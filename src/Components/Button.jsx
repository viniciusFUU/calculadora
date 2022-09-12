import React from "react";
import './Button.css'

export default props => {
    let Classes = 'button '
    Classes += props.operation ? 'operation' : ''
    Classes += props.double ? 'double' : ''
    Classes += props.triple ? 'triple' : ''

    return (
        <button onClick={e => props.click(props.label)} className={Classes}>
            {props.label}
        </button>
    )
} 
    