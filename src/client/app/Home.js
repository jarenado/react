import React from 'react';
import {render} from 'react-dom';
import Grid from './Grid';
require('./css/grid.scss');

class Home extends React.Component {
  render() {
    return (
      <div> 
	<Grid />
      </div>
    );
  }
}

export default Home;
