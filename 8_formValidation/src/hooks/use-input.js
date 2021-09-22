import React, {useState} from 'react';

const useInput = (validateValue, errorMsg) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [error, setError] = useState(null);

    const enteredValueIsValid = validateValue(enteredValue);

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    
        if(enteredValueIsValid) {
          setError(null);
        }
    }

    const handleLostFocus = event => {
        if (!enteredValueIsValid) {
          setError(errorMsg);
        }
    };

    const reset = () => {
        setEnteredValue('');
    }

    return {
        value: enteredValue,
        isValid: enteredValueIsValid,
        error,
        valueChangeHandler,
        handleLostFocus,
        reset
    }
};

export default useInput;