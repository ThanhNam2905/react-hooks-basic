import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null,
};

function PostFilterForm(props) {

    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(event) {
        const value = event.target.value;
        setSearchTerm(value);

        if(!onSubmit) return;

        // SET -- 100 -- CLEAR, SET -- 500 --> SUBMIT,
        // SET -- 500 -->SUBMIT
        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            }
            onSubmit(formValues);
        }, 500);
        
    }

    return (
        <form className="filter-form">
            <input  type="text"
                    value={searchTerm}
                    onChange={handleSearchTermChange}/>
        </form>
    );
}

export default PostFilterForm;