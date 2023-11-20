import { Component } from 'react';
import css from '../styles.module.css';

export class SearchBar extends Component {
    
    state = {
        query: ''
    };

    handleChange = event => {
        const value = event.target.value.trimStart();
        this.setState({ query: value });
    };

    handleSubmit = event => { 
        event.preventDefault();
        if (this.state.query.length === 0) return;
        this.props.onSubmit(this.state.query);
  };
        
    render() {
        const { query } = this.state;

        return (
            
        <header className={css.searchBar} >
            <form className={ css.searchForm} onSubmit={this.handleSubmit}>
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
                    onChange={this.handleChange}
                    
                />
            </form>
        </header>    
    )
    }
    
    
}