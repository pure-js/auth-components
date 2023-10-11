import { useCallback, useState } from 'react';

export default function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false); //for button
  const [isInputValid, setIsInputValid] = useState({}); //for check validity of inputs

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    const validationMessage = evt.target.validationMessage;
    const valid = evt.target.validity.valid;
    const form = evt.target.form;

    setValues((oldValues) => {
      return { ...oldValues, [name]: value };
    });

    setErrors((oldErrors) => {
      return { ...oldErrors, [name]: validationMessage };
    });

    setIsInputValid((oldIsInputValid) => {
      return { ...oldIsInputValid, [name]: valid };
    });

    setIsValid(form.checkValidity());
  }

  function reset(data = {}) {
    setValues(data);
    setErrors({});
    setIsValid(false);
    setIsInputValid({});
  }

  //ф которая будет устанавливать первоначальные данные
  const setValue = useCallback((name, value) => {
    setValues((oldValues) => {
      return { ...oldValues, [name]: value };
    });
  }, []);

  return {
    values,
    errors,
    isValid,
    isInputValid,
    handleChange,
    reset,
    setValue,
  };
}

{
  /* <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            isOpen={isOpen}
            onClose={resetForClose}
            isValid={isValid}
            onSubmit={handleSubmit}
            isSend={isSend}
        ></PopupWithForm> */
}
