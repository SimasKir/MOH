import React from 'react';
import classes from './socialIcon.module.scss';

export const SocialIcon = (props) => {
    return (
        <button className={classes.social_icon}>
            {props.children}
        </button>  
    )
};

export default SocialIcon;