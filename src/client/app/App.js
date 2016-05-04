import React from 'react';
import {render} from 'react-dom';
import Footer from './Footer'
import Header from './Header'
import Grid from './Grid'
require('./css/grid.scss')


class App extends React.Component {
  
  render () {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
  }
}

export default App;
