import React from 'react';
import {render} from 'react-dom';
import Site from './Site';

class Grid extends React.Component {
    constructor() {
	super();
	// this.handleModal = this.handleModal.bind(this);
    }

    handleModal(data) {
	console.log("this is from the child " + data);
    }

    render() {
	var sites = this.props.sites.map(function(site){
	    return <Site site={site} onClick={this.handleModal} />;
	}.bind(this));

	return (
	    <div>
		<ul class="sites">
		{sites}
		</ul>
	    </div>
	);
    }
}

export default Grid;
