import React from 'react';
import { GridListTile, GridListTileBar, GridList } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import classes from './TV.module.css';


const tv = (props) =>{
      const shows = props.data.map(tile => {
        const{id,season,number,airdate, airtime, name} = tile;
        let network;
        if(tile.show.network) {
          network = tile.show.network.name;
        } else {
          network = tile.show.webChannel.name;
        }
        let image;
        if(tile.show.image) {
          image = tile.show.image.original
        } else {
          image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8-T2J6JldYU163OGGGK3GOB9f8Fb-u2k-ntRKn5ozVs7eYX2i'
        }
        return (
          <GridListTile key={id} className={classes.column}>
            <img src={image} alt={name} style={{ verticalAlign: 'middle', width: '100%', height: 'inherit'}}/>
            <GridListTileBar
              style={{height: '80px'}}
              title={tile.show.name}
              subtitle={<div>
                          <div>S{season}E{number}</div> 
                          <div>{name}</div>
                          <div>{airdate}  {airtime}</div>
                          <div>On: {network}</div>
                          </div>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.name}`} style={{color: 'rgba(255, 255, 255, 0.54)', display: "table-cell"}} href={tile.show.officialSite} rel="noopener noreferrer" target="_blank">
                  <InfoIcon/>
                </IconButton>
                      }
                    />
                  </GridListTile>
        )});

      return (
        <div>
            <GridList className={classes.row} cellHeight={500}>
                {shows}
              </GridList>
        </div>
          );
  }

export default  tv;
