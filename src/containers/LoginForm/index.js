import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from '../../components/FormField';

const Form = (props) => {

    const onSubmit = (formvalues) => {
        console.log(formvalues);
    }

    return <form onSubmit={props.handleSubmit(onSubmit)} class="ui form" style={{ display: 'flex', flexDirection: 'column' }}>
        <Field name="username" component={FormField} label="Username" type="email"/>
        <Field name="password" component={FormField} label="Password" type="password"/>
        <button class="ui button primary" type="submit">Login</button>
    </form>
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.username) {
        errors.username = 'please enter the username'
    }
    if(!formValues.password) {
        errors.password = 'please enter the password'
    }
    return errors;
}

export default reduxForm({
    form: 'loginform',
    validate
})(Form);