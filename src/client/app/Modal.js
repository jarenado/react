import React from 'react';
import {render} from 'react-dom';
require('./css/modal.scss');

class Modal extends React.Component {
    constructor() {
        super();
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal(){
        this.props.onClick();
    }
    render (){
        return (
                <div className={this.props.style} id="modal" onClick={this.closeModal}>
                    <h1>{this.props.site.title}</h1>
                    <p>{this.props.site.description}</p>
                </div>
        )

    }
}

export default Modal;
