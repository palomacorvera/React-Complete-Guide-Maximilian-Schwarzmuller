import React, {useRef, useState} from 'react';

import style from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim().length !== 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = !isNotFiveChars(enteredPostalCode);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        });

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode
        });
    }

    const nameControlClasses = `${style.control} ${
        formInputsValidity.name ? '' : style.invalid
    }`;

    const streetControlClasses = `${style.control} ${
        formInputsValidity.street ? '' : style.invalid
    }`;

    const postalCodeControlClasses = `${style.control} ${
        formInputsValidity.postalCode ? '' : style.invalid
    }`;

    const cityControlClasses = `${style.control} ${
        formInputsValidity.city ? '' : style.invalid
    }`;

    return (
        <form className={style.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFot="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef}/>
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFot="street">Street</label>
                <input type="text" id="street" ref={streetInputRef}/>
                {!formInputsValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFot="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef}/>
                {!formInputsValidity.postalCode && <p>Please enter a valid postal code!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFot="city">City</label>
                <input type="text" id="city" ref={cityInputRef}/>
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={style.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={style.submit}>Confirm</button>
            </div>
        </form>
    )
};

export default Checkout;