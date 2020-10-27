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

        const projectionCheck = (obj) => {
            if (obj.projection > obj.targets.income) {
                return 'wh-projection-green';
            }
            else {
                return 'wh-projection-red';
            }
        }

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
                                {warehouse.targets.perc}%, {warehouse.targets.slots}sl, {warehouse.targets.spaces}sp, £{warehouse.targets.income}
                            </div>
                            <div className="wh-locations-targets-projections">
                                Next Month Projections: <span className={projectionCheck(warehouse)}>£{warehouse.projection}</span>
                            </div>
                            <div className="wh-locations-targets-new">
                                New Targets
                            </div>
                        </div>
                        <div className="wh-locations-status">
                            <div className="wh-locations-status-statuses">
                                <span className="wh-locations-status-store">83%</span>
                                <span className="wh-locations-status-warn">11%</span>
                                <span className="wh-locations-status-over">2%</span>
                            </div>
                            <div className="wh-locations-status-bar purple">

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