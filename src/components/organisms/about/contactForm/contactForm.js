import React from 'react'
import classes from './contactForm.module.scss'

const ContactForm = (props) => {

    return (
        <form id='contact' className={classes.form}>
            <h4 className={classes.form_heading}>Sign up for our newsletter:</h4>
            <div className={classes.form_email_field}>
                <label className={classes.form_label}>Your email:</label>
                <input className={classes.form_input} type="text"/>
                <button className={classes.form_button}>Send!</button> 
            </div>
        </form>
    )

}

export default ContactForm;