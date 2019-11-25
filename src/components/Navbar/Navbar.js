import React from 'react';
import SearchBox from '../SearchBox/SearchBox';

const navbar = (props) => {

    return(        
        <div className="ui menu fixed">
          <div className="header">
          <h4 class="ui large header"><span role="img" aria-label="tv">📺</span>YourFlix</h4>
          </div>
          <div className="ui category search item right">
            <SearchBox {...props}/>
          </div>
        </div>
    );
}

export default navbar;