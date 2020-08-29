import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {

    const { onSubmit } = props;
    const [ value, setValue ] = useState('');

    function handleValueChange(event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    function handleSubmit(event) {
        // Prevent Reloading Browser: dung de ko reload lai browser
        event.preventDefault();
        if(!onSubmit) return;

        const formValues = {
            title: value
        }
        onSubmit(formValues);
        
        // Reset Value vua input 
        setValue('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={value}  onChange={handleValueChange}/>
        </form>
    );
}

export default TodoForm;