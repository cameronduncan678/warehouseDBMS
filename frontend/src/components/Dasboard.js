import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/locationsActions';

//Components
import GraphCard from './GraphCard';
import DashStats1 from './DashStats1';
import DashStats2 from './DashStats2';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchLocations();
    }

    render() {
        return (
            <main className="section">
                <section className="wh-dashboard-container">
                    <div className="row">
                        <div className="col s12 l6">
                            <div className="row section">
                                <div className="col s6">
                                    <GraphCard />
                                </div>
                                <div className="col s6">
                                    <GraphCard />
                                </div>
                            </div>
                            <div className="row section">
                                <div className="col s6">
                                    <GraphCard />
                                </div>
                                <div className="col s6">
                                    <GraphCard />
                                </div>
                            </div>
                        </div>
                        <div className="col s12 l6">
                            <div className="row section">
                                <div className="col s12">
                                    <DashStats1 />
                                </div>
                            </div>
                            <div className="row section">
                                <div className="col s12">
                                    <DashStats2 locations={this.props.localLocations} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

}

const mapStateToProps = state => ({
    localLocations: state.locations.data
})

export default connect(mapStateToProps, { fetchLocations })(Dashboard);