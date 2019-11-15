import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TV from './components/TV';
import Layout from './components/Layout/Layout';
// import  axios  from 'axios';

class App extends Component {
  render () {
    return(
      <Layout>
        <Switch>
          <Route path='/' exact component={TV} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
