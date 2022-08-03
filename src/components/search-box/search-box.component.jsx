import { Component } from "react";
import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onSearchHandler }) => (
    <input
        className={`search-box ${className}`}
        type={'search'}
        placeholder={placeholder}
        onChange={onSearchHandler}
    />
);

export default SearchBox;