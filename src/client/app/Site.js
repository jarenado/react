import React from 'react';
import {render} from 'react-dom';

class Site extends React.Component {
    constructor() {
	super();
	this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
	var siteData = this.refs.siteData.getAttribute('data-preview');
	this.props.onClick(siteData);
    }

    render() {
	return (
		<li ref="siteData" onClick={this.handleClick}  data-preview={this.props.site.description}>
		{this.props.site.title}
	    </li>
	);
    }
}

export default Site;
