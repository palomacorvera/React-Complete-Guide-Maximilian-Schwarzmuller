import React, {useRef, useImperativeHandle} from 'react';

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    })

    return (
        <div
          className={`${props.classes.control} ${
            props.state.isValid === false ? props.classes.invalid : ''
          }`}
        >
          <label htmlFor={props.value}>{props.value}</label>
          <input
            ref={inputRef}
            type={props.value}
            id={props.value}
            value={props.state.value}
            onChange={props.changeHandler}
            onBlur={props.validateHandler}
          />
        </div>
    );
})

export default Input;