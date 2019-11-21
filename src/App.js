import React, { Component, Fragment } from 'react';
import TV from './components/TV/TV';
import  axios  from 'axios';
import Navbar from './components/Navbar/Navbar';
import classes from './App.module.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      tileData: [],
      searchfield: '',
      loading: true
    }
  }

  componentDidMount() {
    axios.get('https://api.tvmaze.com/schedule').then(res => {
      console.log(res);
      const data = res.data;
      this.setState({tileData: data, loading: false});
      // console.log("CDM",this.state);
    }).catch(err => {
      console.log(err);
    })
  }

  // componentDidUpdate() {
  //   console.log("CDU",this.state);
    
  // }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });  
  }

  onAbortChange = () => {
    this.setState({ searchfield: '' });  
  }

  render () {
    const filteredShows = this.state.tileData.filter(tile => {
      return (tile.show.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase()))
    })
    return(
      <Fragment>
        <Navbar searchChange={this.onSearchChange} searchfield={this.state.searchfield} abortChange={this.onAbortChange} />
        <main style={{marginTop: '64px'}}>
          {this.state.loading? <div className={classes.loader}>Loading...</div>:<TV data={filteredShows}/>}
        </main>
      </Fragment>
    );
  }
}

export default App;
