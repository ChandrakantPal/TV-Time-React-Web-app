import React, { Fragment } from 'react';
import classes from './SearchBox.module.css';
import SearchIcon from '@material-ui/icons/Search';

const searchBox = ({searchfield, searchChange, abortChange}) => {
    console.log(searchfield);
    return (
        <Fragment >
            <div className={classes.searchBox} >
            <input 
                type="search" 
                placeholder="Search Shows... " 
                onChange={searchChange}
                value={searchfield}
                onAbort={abortChange}
                className={classes.searchInput}
                onSubmit={searchChange}
            />
            <SearchIcon className={classes.searchButton}/>
            </div>
        </Fragment>
    );
}

export default searchBox; 