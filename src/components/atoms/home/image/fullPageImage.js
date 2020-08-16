import React from 'react';
import classes from './fullPageImage.module.scss';

export const FullPageImage = (props) => {
    return (
        <div className={classes.image}>
            <img className={classes.imageImport} src={props.src} alt={props.alt}/>
        </div>
    )
}

export default FullPageImage;