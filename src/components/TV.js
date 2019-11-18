import React, { Component } from 'react';
import { GridListTile, GridListTileBar, GridList} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import axios from 'axios';
import classes from './TV.module.css';


class TV extends Component {
  state = {
    tileData: []
  }

  componentDidMount() {
    axios.get('https://api.tvmaze.com/schedule').then(res => {
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
      // const classes = this.props;
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
          <GridListTile key={tile.id} className={classes.column}>
            <img src={tile.show.image.original} alt={tile.name} style={{ verticalAlign: 'middle', width: '100%', height: 'inherit'}}/>
            <GridListTileBar
              title={tile.show.name}
              subtitle={<div><div>{tile.season}x{tile.number} {tile.name}</div> <div>{tile.airdate}  {tile.airtime}</div><div>On:{name}</div></div>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.name}`} style={{color: 'rgba(255, 255, 255, 0.54)', display: "table-cell"}} href={tile.show.officialSite} rel="noopener noreferrer" target="_blank">
                  <InfoIcon/>
                </IconButton>
                      }
                    />
                  </GridListTile>
        )});

      return (
        <div >
            <GridList className={classes.row} cellHeight={500}>
                {shows}
              </GridList>
            </div>
          );
  }
}

export default  TV;
