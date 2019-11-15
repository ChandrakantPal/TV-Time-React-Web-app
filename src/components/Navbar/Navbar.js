import React from 'react';
import {AppBar, Toolbar, Typography, withStyles} from '@material-ui/core';

const styles = {
  appBar: {
    background: '#054e45e6',
  },
  appTitle: {
    display: 'inline-block',
    position: 'absolute',
    padding: '16px',
    left: '0',
    fontSize: '20px'
  }
}

const navbar = (props) => {

  const { classes } = props;
    return(
        <AppBar className={classes.appBar}  position="fixed">
          <Toolbar>
            <Typography  variant="inherit" color="inherit" className={classes.appTitle}>
              <span role="img" aria-label="tv">📺</span>TV TIME<span role="img" aria-label="time">⏳</span>
            </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(navbar);