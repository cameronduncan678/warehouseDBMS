import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../actions/locationsActions';
import { fetchLatestReports } from '../actions/reportsActions';


//Components
import Graph from './Graph';
import DashStats1 from './DashStats1';
import DashStats2 from './DashStats2';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchLocations();
        this.props.fetchLatestReports();
    }

    render() {
        return (
            <main className="section">
                <section className="wh-dashboard-container">
                    <div className="row">
                        <div className="col s12 l6">
                            <div className="row section">
                                <div className="">
                                    <Graph data={this.props.localLocations} />
                                </div>
                            </div>
                        </div>
                        <div className="col s12 l6">
                            <div className="section">
                                <div className="">
                                    <DashStats1 report={this.props.localReports} />
                                </div>
                            </div>
                            <div className="section">
                                <div className="">
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
    localLocations: state.locations.data,
    localReports: state.reports.dat
})

export default connect(mapStateToProps, { fetchLocations, fetchLatestReports })(Dashboard);