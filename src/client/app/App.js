import React from 'react';
import {render} from 'react-dom';
import Footer from './Footer'
import Header from './Header'
import Grid from './Grid'
import Modal from './Modal'

class App extends React.Component {
  
  render () {
      var data = [
	  {
	      title: 'gucci.com',
	      description: 'This is the description for Gucci'
	 
	  },
	  {
	      title: 'jcrew.com',
	      description: 'This is the description for JCrew'
	 
	  },
	 {
	      title: 'coach.com',
	      description: 'This is the description for Coach'
	 
	  },
	  
      ]
    return (
        <div>
	    <Header />
	    <Grid sites={data} />
	    <Footer />
	    <Modal />
        </div>
    );
  }
}
export default App;
