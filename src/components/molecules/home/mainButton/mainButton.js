import React from 'react';
import classes from './mainButton.module.scss';
import ButtonTextDecoration from '../../../atoms/home/buttonTextDecoration/buttonTextDecoration';

export const MainButton = (props) => {
    return (
        <button className={classes.main_button}>
            <ButtonTextDecoration text={props.text}/>
        </button>
    )
}

export default MainButton;