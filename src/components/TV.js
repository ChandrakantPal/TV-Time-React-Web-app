import React, { Component, Fragment } from 'react';
import { withStyles, GridListTile,GridListTileBar, GridList, ListSubheader, Card, CardMedia,CardContent } from '@material-ui/core';
// import GridList from '@material-ui/core/GridList';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import Tvtile from './Tvtile';
import axios from 'axios';
// import tileData from './tileData';

const styles = {
  root: {
    marginTop: '64px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  gridListTile: {
    width: '100%',
    height: 'auto'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
};


class TV extends Component {
  state = {
    tileData: []
  }

  componentDidMount() {
    axios.get('http://api.tvmaze.com/schedule').then(res => {
      console.log(res);
      const data = res.data;
      this.setState({tileData: data});
      console.log("CDM",this.state);
    }).catch(err => {
      console.log(err);
      
    })
  }

  componentDidUpdate() {
    console.log("CDU",this.state);
    
  }

  render() {
      const classes = this.props;
      const shows = this.state.tileData.map(tile => {
        let name;
        if(tile.show.network) {
          name = tile.show.network.name;
        } else {
          name = tile.show.webChannel.name;
        }
        return (
          // <Fragment key={tile.id}>
          //   <Tvtile  image={tile.show.image.medium} name={tile.name} />
          //   <img src={tile.show.image.medium} alt={tile.name} />
          // </Fragment>
          <GridListTile key={tile.id} className={classes.gridListTile}>
            <img src={tile.show.image.original} alt={tile.name} style={{width: '100%',height:'inherit'}}/>
            <GridListTileBar
              title={tile.show.name}
              subtitle={<div><div>{tile.season}x{tile.number} {tile.name}</div> <div>{tile.airdate}  {tile.airtime}</div><div>On:{name}</div></div>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.name}`} style={{color: 'rgba(255, 255, 255, 0.54)'}}>
                  <InfoIcon />
                </IconButton>
                      }
                    />
                  </GridListTile>
        )});

      return (
        <div className={classes.root}>
            <GridList cellHeight={500} cols={3}  className={classes.gridList}>
                {shows}
              </GridList>
            </div>
          );
  }
}

export default  withStyles(styles)(TV);
