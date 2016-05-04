import React from 'react';
import {render} from 'react-dom';
import Site from './Site';
import Modal from './Modal'
require('./css/grid.scss')

class Grid extends React.Component {
    constructor() {
        super();
        this.handleModal = this.handleModal.bind(this);
        this.state = {
            activeModal: '1',
            sites: [
                {
                    id: '0',
                    title: 'gucci.com',
                    description: 'This is the description for Gucci'
                },
                {
                    id: '1',
                    title: 'jcrew.com',
                    description: 'This is the description for JCrew'
                },
                {
                    id: '2',
                    title: 'coach.com',
                    description: 'This is the description for Coach'
                }

                ]
            }

    }

    handleModal(data) {
        this.setState({activeModal:data});
    }

    render() {
        var site = this.state.sites[this.state.activeModal];
        var sites = this.state.sites.map(function(site){
            return <Site site={site}  onClick={this.handleModal}  />;
        }.bind(this));

        return (
            <div>
                <ul class="sites">
                    {sites}
                </ul>
                <Modal site={site} />
            </div>
	      );
    }
}

export default Grid;
