import React from 'react';


const searchBox = ({searchfield, searchChange, abortChange}) => {
    console.log(searchfield);
    return (
            <div className="ui transparent icon input">
            <input 
                type="search" 
                placeholder="Search Shows" 
                onChange={searchChange}
                value={searchfield}
                onAbort={abortChange}
                className="prompt"
                onSubmit={searchChange}
            />
            <i className="search icon"></i>
            </div>
    );
}

export default searchBox; 