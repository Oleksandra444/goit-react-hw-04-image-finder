import { useState } from 'react';
import css from '../styles.module.css';

export const SearchBar = ({ onSubmit}) => { 

    const [query, setQuery] = useState('');

const handleChange = event => {
        const value = event.target.value.trimStart();
        setQuery(value);
    };

const handleSubmit = event => { 
        event.preventDefault();
        if (query.length === 0) return;
        onSubmit(query);
  }; 

    return (
            
        <header className={css.searchBar} >
            <form className={ css.searchForm} onSubmit={handleSubmit}>
                <button type="submit" className={css.searchFormButton } >
                    <span className={css.searchFormButtonLabel}></span>
                </button>
                <input
                        className={css.searchFormInput}
                        name="search image"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                    
                />
            </form>
        </header>    
    )
    
    
    
}