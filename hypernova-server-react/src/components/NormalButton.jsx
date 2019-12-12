import * as React from 'react';
// import './normalButton.css';

export const NormalButton = (props) => (
    <div id={props.id ? props.id : '' }
    className={`nr-button ${props.class ? props.class : ''}`}
    onClick={props.onClick} style={{...props.style}}>{props.text ? props.text : ''}
    {props.children}
    </div>
)