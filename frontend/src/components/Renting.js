import React from 'react';
import { connect } from 'react-redux';
import { addRenting, fetchRentingById } from '../actions/rentingActions';
import { Route, useParams } from "react-router-dom";

import Items from './Items';
import DataPacket from './Datapacket';

class Renting extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchRentingById(this.props.match.params.id);
    };

    render() {

        return (
            <main className="wh-Items section">
                <section className="section">
                    <div className="row">
                        <div className="col s12 l6">
                            {this.props.localRenting.items ? <Items items={this.props.localRenting.items} rentingId={this.props.match.params.id} /> : null}
                        </div>
                        <div className="col s12 l6">
                            <DataPacket data={this.props.localRenting} />
                        </div>
                    </div>
                </section>
            </main>
        )
    }
};

const mapStateToProps = state => ({
    localRenting: state.rentings.dat
})

export default connect(mapStateToProps, { fetchRentingById })(Renting);