import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/Navbar';

class Layout extends Component {
    render () {
        return(
            <Fragment >
                <Navbar />
                <main style={{marginTop: '64px', marginBottom: '56px'}}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;