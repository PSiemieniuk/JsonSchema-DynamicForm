import React, {FunctionComponent} from 'react';
import {
    useFormikContext,
} from 'formik';

export const SubmitButton : FunctionComponent<SubmitButtonProps> = (props) => {
    const { title, ...rest } = props;
    const { isSubmitting } = useFormikContext();

    return (
        <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>
    )
};

interface SubmitButtonProps {
    title: string;
}