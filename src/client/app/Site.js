import React from 'react';
import {render} from 'react-dom';

class Site extends React.Component {
    constructor() {
	super();
	this.handleClick = this.handleClick.bind(this);
	this.state = {isSelected: false}
    }

    
    handleClick(){
	this.setState({
	    isSelected: true
	});
	console.log(this.state.isSelected);
    }

    render() {
	let isSelected = this.state.isSelected;
	// let style = (isSelected) ? 'blue' : 'red';
	// style = "background-color:" + style;
	return (
		<li onClick={this.handleClick}  data-preview={this.props.site.description}>
		{this.props.site.title}
	    </li>
	);
    }
}

export default Site;
