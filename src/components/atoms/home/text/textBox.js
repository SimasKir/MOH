import React from 'react';
import classes from './textBox.module.scss';

export const TextBox = (props) => {
    return (
        <div className={classes.text}>
            {props.text}
        </div>
    )
}

export default TextBox;