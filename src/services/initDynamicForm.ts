import * as Yup from 'yup';

export const initDynamicForm = (formSchema: any, setFormData: Function, setValidationSchema: Function) => {
    let _formData: any = {};
    let _validationSchema: any = {};

    for(var key of Object.keys(formSchema)){
        _formData[key] = "";

        switch(formSchema[key].type){
            case "text":
                _validationSchema[key] = Yup.string();
                break;
            case "email":
                _validationSchema[key] = Yup.string().email();
                break;
            case "password":
                _validationSchema[key] = Yup.string().min(8);
                break;
            case "select":
                _validationSchema[key] = Yup.string().oneOf(formSchema[key].options.map((opt: any) => opt.value));
                break;
            case "checkbox":
                _formData[key] = false;
                if(formSchema[key].required) {
                    _validationSchema[key] = Yup.bool().oneOf([true], 'Required')
                }
        }

        if(formSchema[key].required){
            _validationSchema[key] = _validationSchema[key].required(`${formSchema[key].label} is required`);
        }
    }

    setFormData(_formData);
    setValidationSchema(Yup.object().shape({ ..._validationSchema }));
};

interface initDynamicFormProps {
    formSchema: Object,
    setFormData: Function,
    setValidationSchema: Function,
}