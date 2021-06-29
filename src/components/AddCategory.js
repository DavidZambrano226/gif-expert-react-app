import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handlerChange = (e) => {
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2 ) {
            setCategories( category => [inputValue, ...category] );
            setInputValue('');
        }

    }
    
    return (
        <form onSubmit={handlerSubmit}>
            <input 
                type="text" 
                value = {inputValue}
                onChange={ handlerChange } 
                
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
