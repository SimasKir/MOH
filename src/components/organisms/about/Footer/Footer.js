import React from 'react';
import classes from './Footer.module.scss';
import SocialIcons from '../../../molecules/home/socialIcons/socialIcons';
import Copyright from '../../../atoms/about/copyright/copyright';

export const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <Copyright copyright='© 2020 Mate of Honour'/>
            <SocialIcons/>
        </div>
    )
}

export default Footer;