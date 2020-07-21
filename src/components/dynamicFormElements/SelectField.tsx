import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

export const SelectField = (props: SelectFieldProps) => {
    const { name, label, options } = props;
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                as="select"
                id={name}
                name={name}
            >
                <option value="" >Choose...</option>
                {options.map((optn, index) => <option value={optn.value}> {optn.label || optn.value}</option>)}
            </Field>
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
};

interface SelectFieldProps {
    name: string;
    label: string;
    options: [ { label: string; value: string; } ];
}