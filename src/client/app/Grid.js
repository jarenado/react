import React from 'react';
import {render} from 'react-dom';
import Site from './Site';

class Grid extends React.Component {

    render() {
	var sites = this.props.sites.map(function(site){
	    return <Site site={site} />
	});
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
