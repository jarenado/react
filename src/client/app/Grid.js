import React from 'react';
import {render} from 'react-dom';
// require('stylesheets/modules/grid')

class Grid extends React.Component {
    constructor(props) {
	super(props);
    }
    render() {
	var sites = this.props.sites.map(function(site){
	    return <li data-preview={site.description}>{site.title}</li>;
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
