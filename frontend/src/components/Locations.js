import React from 'react';
import { fetchLocations } from '../actions/locationsActions';
import { connect } from 'react-redux';

class Locations extends React.Component {

    componentDidMount() {
        this.props.fetchLocations()
    }

    render() {

        const locationNavs = this.props.localLocations.map(warehouse => (
            <div key={warehouse.location} className="wh-location-nav-link">
                <i className="fas fa-warehouse"></i>
                <span>{warehouse.location}</span>
            </div>
        ))

        const locationDash = this.props.localLocations.map(warehouse => (
            <div key={warehouse.location} className="wh-locations-wdgt-dash">
                <div className="wh-locations-wdgts-title">
                    <div className="col s6 wh-locations-wdgts-title-title">
                        <div className="">{warehouse.location}</div>
                    </div>
                    <div className="col s6 wh-locations-wdgts-title-income">
                        <div className="">Total per/Month: £{warehouse.incomePerWeek}</div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="wh-locations-wdgts-stats">
                        <div className="wh-locations-wdgts-stats-title">
                            Stats
                        </div>
                        <div className="wh-locations-wdgts-stats-ul"></div>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="wh-locations-wdgts-stats">
                        <div className="wh-locations-wdgts-stats-title"></div>
                        <div className="wh-locations-targets">
                            <div className="wh-locations-targets-title">
                                Targets
                            </div>
                            <div className="wh-locations-targets-targets">
                                73%, 20sl, 40sp, £4500
                            </div>
                            <div className="wh-locations-targets-new">
                                New Targets
                            </div>
                        </div>
                        <div className="wh-locations-projections">
                            <div className="wh-locations-projections-title">
                                Next Month Projections:<span>£5800</span>
                            </div>
                            <div className="wh-locations-projections-projection">
                                <span className="wh-locations-proj-store">83%</span>
                                <span className="wh-locations-proj-warn">11%</span>
                                <span className="wh-locations-proj-over">2%</span>
                            </div>
                            <div className="wh-locations-projections-bar purple">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))

        return (
            <div className="wh-locations">
                <section className="section">
                    <div className="row">
                        <div id="locationNav" className="col s0 m3">
                            <div className="wh-locations-nav">
                                {locationNavs}
                            </div>
                        </div>
                        <div className="col s12 m9">
                            <div className="wh-locations-wdgts">
                                {locationDash}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    localLocations: state.locations.data
})

export default connect(mapStateToProps, { fetchLocations })(Locations);