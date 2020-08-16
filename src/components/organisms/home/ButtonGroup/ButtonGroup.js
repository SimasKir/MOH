import React from 'react';
import classes from './ButtonGroup.module.scss';
import MainButton from '../../../molecules/home/mainButton/mainButton';

export const ButtonGroup = (props) => {
    return (
        <div className={classes.button_group}>
            <MainButton text='About us'/>
            <MainButton text='Our Services'/>
            <MainButton text='The Blog'/>
        </div>
    )
}

export default ButtonGroup;