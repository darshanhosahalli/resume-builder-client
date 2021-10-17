import React from 'react';

const FormField = (formProps) => {
    console.log('formProps:- ',formProps);
    return <div class="field">
            <label>{formProps.label}</label>
            <input value={formProps.value} onChange={formProps.onChange} type={formProps.type}/>
            <div class="ui error message">
                <p>{formProps.meta.error}</p>
            </div>
        </div>
}

export default FormField;