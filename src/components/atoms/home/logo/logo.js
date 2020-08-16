import React from 'react';
import classes from './logo.module.scss';

import {ReactComponent as LogoImage} from '../../../../assets/logobw.svg';

export const Logo = (props) => {
    return (
        <div className={classes.logo}>
            <LogoImage/>
            <div className={classes.company_name}>Mate of Honour</div>
        </div>  
    )
}

export default Logo;