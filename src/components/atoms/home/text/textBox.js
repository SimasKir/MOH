import React from 'react';
import classes from './textBox.module.scss';

//Parisienne or Roboto

export const TextBox = (props) => {
    return (
        <div className={classes.text} style={{ fontFamily: props.textStyle, fontSize: props.textSize}}>
            {props.text}
        </div>
    )
}

export default TextBox;