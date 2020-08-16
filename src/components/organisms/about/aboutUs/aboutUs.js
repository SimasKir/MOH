import React from 'react';
import classes from './aboutUs.module.scss';

import AboutImage from '../../../atoms/about/aboutImage/aboutImage';
import Newlyweds from '../../../../assets/about.jpg';
import AboutText from '../../../atoms/about/aboutText/aboutText';
import ContactButton from '../../../atoms/about/contactButton/contactButton';
import ContactForm from '../contactForm/contactForm';

export const AboutUs = (props) => {
    return (
        <div className={classes.about_us}>
            <div className={classes.about_us_intro}>
                <AboutImage src={Newlyweds} alt="newlyweds"/>
                <AboutText text='Planning your life together can be overwhelming and we know your friends are not always available. You can count on us since the very first step: we are your mate of honour and our job is to make the journey easy and fun!'/>
                <ContactButton text='Contact us!'/>
            </div>
            <div className={classes.about_us_form}>
                <ContactForm/>
            </div>
        </div>
    )
}

export default AboutUs;