import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import TV from './components/TV/TV';
import SearchBox from './components/SearchBox/SearchBox';
import  axios  from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tileData: [],
      searchfield: ''
    }
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
      <Layout>
        {/* <Switch>
          <Route path='/' exact component={TV} />
        </Switch> */}
        <SearchBox searchChange={this.onSearchChange} searchfield={this.state.searchfield} abortChange={this.onAbortChange}/>
        <TV data={filteredShows} />
      </Layout>
    );
  }
}

export default App;
