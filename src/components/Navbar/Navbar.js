import React from 'react';
import {AppBar, Toolbar, Typography, withStyles} from '@material-ui/core';
import SearchBox from '../SearchBox/SearchBox';

const styles = {
  appBar: {
    background: '#172837',
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center'
  },
  appTitle: {
    display: 'inline-flex',
    position: 'inherit',
    padding: '0',
    left: '0',
    fontSize: '2rem',
    color: '#00b3b4',
    textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
  }
}

const navbar = (props) => {

  const { classes } = props;
    return(
        <AppBar className={classes.appBar}  position="fixed">
          <Toolbar>
            <Typography  variant="inherit" color="inherit" className={classes.appTitle}>
              <span role="img" aria-label="tv">📺</span>YourFlix
            </Typography>
            <SearchBox {...props}/>
          </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(navbar);