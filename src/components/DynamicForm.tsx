import React from "react";
import {Form} from "./dynamicFormElements/Form";
import {FormikConsumer} from "formik";
import {getFormElement} from "../services/getDynamicFormElement";
import {SubmitButton} from "./dynamicFormElements/SubmitButton";

export const DynamicForm = (props: DynamicFormProps) => {
    const {formData, formSchema, validationSchema, onSubmit} = props;
    return  <Form
        enableReinitialize
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {Object.keys(formSchema).map( (key, ind) => (
            <div key={key}>
                {formSchema[key].condition ?
                    <FormikConsumer>
                        {({ validationSchema, validate, ...rest }) => (
                            <>
                                {String(rest.values[formSchema[key].condition.split('.')[0]]) === String(formSchema[key].condition.split('.')[1]) &&
                                getFormElement(key, formSchema[key])}
                            </>
                        )}
                    </FormikConsumer> :
                    getFormElement(key, formSchema[key])
                }
            </div>
        ))}
        <SubmitButton title="Submit" />
        {/*<Debug />*/}
    </Form>
}

interface DynamicFormProps {
    formData: any,
    validationSchema: any,
    formSchema: any,
    onSubmit: any,
}