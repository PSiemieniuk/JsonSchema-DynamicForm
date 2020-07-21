import React, {FunctionComponent} from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

export const TextField: FunctionComponent<TextFieldProps> = (props) => {
    const { name, label, placeholder, ...rest } = props;
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                className="form-control"
                type="text"
                name={name}
                id={name}
                placeholder={placeholder || ""}
                {...rest}
            />
            <ErrorMessage name={name} render={(msg: string) => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
};

interface TextFieldProps {
    name: string;
    label: string;
    placeholder?: string;
}