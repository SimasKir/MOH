import React from 'react';
import classes from './buttonTextDecoration.module.scss';
import TextBox from '../text/textBox';

export const ButtonTextDecoration = (props) => {
    return (
        <div className={classes.textWithDeco}>
            <TextBox text={props.text} textStyle='Parisienne' textSize={40}/>
        </div>
    )
}

export default ButtonTextDecoration;