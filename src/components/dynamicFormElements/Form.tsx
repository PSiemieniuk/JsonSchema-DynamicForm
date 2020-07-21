import React, {FunctionComponent} from 'react';
import {
    Formik,
    Form as FormikForm,
    FormikValues, FormikConfig
} from 'formik';

export const Form: FunctionComponent<FormikConfig<FormikValues>> = (props) => {
    return (
        <Formik
            {...props}
        >
            <FormikForm className="needs-validation">
                {props.children}
            </FormikForm>
        </Formik>)
}