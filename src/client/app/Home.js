import React from 'react';
import {render} from 'react-dom';
import Grid from './Grid';
import 'style!./css/grid.sass';

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
