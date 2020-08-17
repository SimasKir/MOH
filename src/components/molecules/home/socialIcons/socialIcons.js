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
                <a href='https://www.instagram.com/mateofhonour/'>
                    <Instagram/>
                </a>
            </SocialIcon>
            <SocialIcon>
                <a href='https://www.facebook.com'>
                    <Facebook/>
                </a>
            </SocialIcon>
            <SocialIcon>
                <a href='https://www.twitter.com'>
                    <Twitter/>
                </a>
            </SocialIcon>
        </div>  
    )
}

export default SocialIcons;