import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

export const CheckboxField = (props: CheckboxFieldProps) => {
    const { name, label } = props;

    return (<>
            <Field type="checkbox" name={name} />
            <label htmlFor={name}>{label ? label : name}</label>
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

interface CheckboxFieldProps {
    name: string;
    label?: string;
}