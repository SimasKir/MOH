import React from 'react';
import classes from './socialIcons.module.scss';
import SocialIcon from '../../../atoms/home/socialIcon/socialIcon';

import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';

export const SocialIcons = (props) => {
    return (
        <div className={classes.social_icons}>
            <SocialIcon>
                <Instagram/>
            </SocialIcon>
            <SocialIcon>
                <Facebook/>
            </SocialIcon>
            <SocialIcon>
                <Twitter/>
            </SocialIcon>
        </div>  
    )
}

export default SocialIcons;