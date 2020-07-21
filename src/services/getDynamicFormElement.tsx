import React from "react";
import {TextField} from "../components/dynamicFormElements/TextField";
import {SelectField} from "../components/dynamicFormElements/SelectField";
import {CheckboxField} from "../components/dynamicFormElements/CheckboxField";

export const getFormElement = (elementName: string, elementSchema: any) => {
    const props = {
        name: elementName,
        label: elementSchema.label,
        options: elementSchema.options
    };

    switch(elementSchema.type){
        case "text":
        case "email":
            return <TextField {...props} />;

        case "select":
            return <SelectField {...props} />;

        case "checkbox":
            return <CheckboxField {...props} />;

    }
};