import React from 'react';
import {render} from 'react-dom';
import Grid from './Grid';
require('./css/grid.scss');

class Home extends React.Component {
  render() {
      var data = [
	  {
	      title: 'gucci.com',
	      description: 'This is the description for Gucci'
	 
	  },
	  {
	      title: 'coach.com',
	      description: 'This is the description for Coach'
	 
	  },
	  
      ]
    return (
      <div> 
	    <Grid sites={data} />
      </div>
    );
  }
}

export default Home;
