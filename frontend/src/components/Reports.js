import React from 'react';
import { fetchReports } from '../actions/reportsActions';
import { connect } from 'react-redux';

import Timeline from './Timeline';
import ReportField from './ReportField';

class Reports extends React.Component {

    componentDidMount() {
        this.props.fetchReports()
    }

    render() {
        return (
            <div>
                <section className="section wh-report-container">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="wh-report-timeline">
                                <Timeline />
                            </div>
                        </div>
                        <div className="col s12 m8">
                            <div className="wh-report-report">
                                <ReportField />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(null, { fetchReports })(Reports);