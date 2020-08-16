import React from 'react';
import classes from './Home.module.scss';
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate';

import FullPageImage from '../../atoms/home/image/fullPageImage';
import PageImage from '../../../assets/fuu-j-_hPDWogxDQg-unsplash.jpg';

export const Home = (props) => {
    return (
        <div className={classes.home}>
            <FullPageImage src={PageImage} alt='newlyweds'/>
            <HomeTemplate/>
        </div>
    )
}

export default Home;