import React from 'react';
import classes from './About.module.scss';
import AboutTemplate from '../../templates/AboutTemplate/AboutTemplate';

export const About = (props) => {
    return (
        <div className={classes.about}>
            <AboutTemplate/>
        </div>
    )
}

export default About;