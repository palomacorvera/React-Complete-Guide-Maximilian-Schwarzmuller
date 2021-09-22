import React from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = () => {
  const {
    value: enteredName, 
    isValid: enteredNameIsValid,
    error, 
    valueChangeHandler: nameInputChangeHandler, 
    handleLostFocus,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '', "Name can´t be empty");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    error: emailError,
    valueChangeHandler: emailInputChangeHandler,
    handleLostFocus: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'), "Plase enter a valid email");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } 

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = !error 
    ? 'form-control' 
    : 'form-control invalid';

  const emailInputClasses = !emailError
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          value={enteredName} 
          onChange={nameInputChangeHandler}
          onBlur={handleLostFocus}
        />
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailError && (
          <p className='error-text'>{emailError}</p>
        )}
      </div>
      {error && <p className="error-text">{error}</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
