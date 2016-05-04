import React from 'react';
import {render} from 'react-dom';

class Modal extends React.Component {
    render (){
        return (
            <div>
                <h1>{this.props.site.title}</h1>
                <p>{this.props.site.description}</p>
            </div>
        )

    }
}

export default Modal;
