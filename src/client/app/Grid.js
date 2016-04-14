import React from 'react';
import {render} from 'react-dom';
// require('stylesheets/modules/grid')

class Grid extends React.Component {
    render() {
	return (
	    <div>
		<ul>
		<li data-preview="This is the preview for item one">item one</li>
		<li data-preview="This is the preview for item two">item two</li>
		<li data-preview="This is the preview for item three">item three</li>
		<li data-preview="This is the preview for item four">item four</li>
		<li data-preview="This is the preview for item five">item five</li>
		<li data-preview="This is the preview for item six">item six</li>
		<li data-preview="This is the preview for item seven">item seven</li>
		</ul>
	    </div>
	);
    }
}

export default Grid;
