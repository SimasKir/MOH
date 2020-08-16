import React from 'react';
import classes from './Header.module.scss';
import Logo from '../../../atoms/home/logo/logo';
import SocialIcons from '../../../molecules/home/socialIcons/socialIcons';

export const Header = (props) => {
    return (
        <div className={classes.header}>
            <Logo/>
            <SocialIcons/>
        </div>
    )
}

export default Header;