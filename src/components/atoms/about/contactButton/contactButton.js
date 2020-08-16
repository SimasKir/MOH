import React from 'react';
import classes from './contactButton.module.scss';

export const ContactButton = (props) => {
    return (
        <button className={classes.contact_button}>{props.text}</button>
    )
}

export default ContactButton;