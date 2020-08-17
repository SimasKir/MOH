import React from 'react';
import classes from './downArrow.module.scss';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export const DownArrow = (props) => {
    return (
        <div className={classes.down_arrow}>
            <div className={classes.down_arrow_decor}></div>
            <button className={classes.down_arrow_button}>
                <a href='#about'>
                    <ArrowDropDownIcon fontSize="large" className={classes.down_arrow_icon}/>
                </a>
            </button>
            
        </div>  
    )
}

export default DownArrow;