import React from 'react';
import classes from './aboutText.module.scss';

export const AboutText = (props) => {
    return (
        <div className={classes.about_text}>
            {props.text}
        </div>
    )
}

export default AboutText;