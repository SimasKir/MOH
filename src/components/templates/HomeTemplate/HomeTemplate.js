import React from 'react';
import classes from './HomeTemplate.module.scss';

import Header from '../../organisms/home/Header/Header';
import ButtonGroup from '../../organisms/home/ButtonGroup/ButtonGroup';

export const HomeTemplate = (props) => {
    return (
        <div className={classes.home_template}>
            <Header/>
            <ButtonGroup/>
        </div>
    )
}

export default HomeTemplate;