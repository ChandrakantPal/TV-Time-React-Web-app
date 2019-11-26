import React from 'react';


const tv = (props) =>{
      const shows = props.data.map(tile => {
        const{id,season,number,airdate, airtime, name} = tile;
        // Info Error handling
        let network;
        if(tile.show.network) {
          network = tile.show.network.name;
        } else {
          network = tile.show.webChannel.name;
        }
        let show_name;
        tile.show.name ? show_name = tile.show.name : show_name = "Info Not Available"
        let show_link;
        tile.show.officialSite ? show_link = tile.show.officialSite : show_link = null; 
        let image;
        tile.show.image ? image = tile.show.image.original : image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8-T2J6JldYU163OGGGK3GOB9f8Fb-u2k-ntRKn5ozVs7eYX2i';
        let show_season;
        season ? show_season = season : show_season = "Info Not Available";
        let episode;
        number ? episode = number : episode = "Info Not Available";
        let episode_name;
        name ? episode_name = name : episode_name = "Info Not Available";
        let air_date;
        airdate ? air_date = airdate : air_date = "Info Not Available";
        let air_time;
        airtime ? air_time = airtime : air_time = "Info Not Available";
        return (
          <div key={id} className="ui centered card">
            <a className="image" href={show_link} rel="noopener noreferrer" target="_blank">
              <img src={image} alt={name} />
            </a>
            <div className="content">
              <div className="header">{show_name}</div>
              <div className="meta">
                <a href={show_link} rel="noopener noreferrer" target="_blank">Show Link</a>
                <p><span>S{show_season}E{episode}</span>
                <br/>
                <span>{episode_name}</span></p>
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                {air_date}  {air_time}
              </span>
              <span>
                On: {network}
              </span>
            </div>
          </div>
          
        )});

      return (
        <div className="ui link cards">
          {shows}
        </div>
          );
  }

export default  tv;
