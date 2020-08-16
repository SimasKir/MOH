import React from 'react';
import classes from './AboutTemplate.module.scss';
import Footer from '../../organisms/about/Footer/Footer';
import DownArrow from '../../atoms/about/downArrow/downArrow';
import AboutUs from '../../organisms/about/aboutUs/aboutUs';

export const AboutTemplate = (props) => {
    return (
        <div className={classes.about_template}>
            <DownArrow/>
            <AboutUs/>
            <Footer/>
        </div>
    )
}

export default AboutTemplate;