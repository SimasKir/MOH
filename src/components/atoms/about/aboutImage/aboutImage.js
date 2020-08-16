import React from 'react';
import classes from './aboutImage.module.scss';

export const AboutImage = (props) => {
    return (
        <div className={classes.about_image}>
            <img className={classes.about_image_import} src={props.src} alt={props.alt}/>
        </div>
    )
}

export default AboutImage;