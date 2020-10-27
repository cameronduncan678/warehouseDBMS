import React from 'react';
import { fetchLocations } from '../actions/locationsActions';
import { connect } from 'react-redux';

class Locations extends React.Component {

    componentDidMount() {
        this.props.fetchLocations()
    }

    render() {
        return (
            <div className="wh-locations">
                <section className="section">
                    <div className="row">
                        <div className="col s0 m3">
                            <div className="wh-locations-nav"></div>
                        </div>
                        <div className="col s12 m9">
                            <div className="wh-locations-wdgts">
                                <div className="wh-locations-wdgt-dash"></div>
                                <div className="wh-locations-wdgt-dash"></div>
                                <div className="wh-locations-wdgt-dash"></div>
                                <div className="wh-locations-wdgt-dash"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(null, { fetchLocations })(Locations);