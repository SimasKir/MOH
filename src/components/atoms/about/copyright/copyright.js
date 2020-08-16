import React from 'react';
import classes from './copyright.module.scss';

export const Copyright = (props) => {
    return (
        <div className={classes.copyright}>
            {props.copyright}
        </div>  
    )
}

export default Copyright;