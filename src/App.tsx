import React, {useEffect, useState} from 'react';
import './App.css';
import {initDynamicForm} from "./services/initDynamicForm";
import {DynamicForm} from "./components/DynamicForm";
import sampleForm from "./constants/forms/sampleForm";

const App = () => {
  const formSchema = sampleForm;
  const [formData, setFormData] = useState({});
  const [validationSchema, setValidationSchema] = useState({});

  useEffect(() => {
    initDynamicForm(formSchema, setFormData, setValidationSchema);
  }, []);

  const onSubmit = (values: any, { setSubmitting, resetForm, setStatus }: any) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="App">
    <h2>FORM!</h2>
      <div>
        <DynamicForm formData={formData} validationSchema={validationSchema} formSchema={formSchema} onSubmit={onSubmit}/>
      </div>
    </div>
  );
}

export default App;
