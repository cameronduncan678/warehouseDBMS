import React from 'react';
import { connect } from 'react-redux';
import { fetchReports } from '../actions/reportsActions';


class DashStats1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: this.props.localReport.reportTitle,
            // summary: this.props.localReports[0].reportText,
            // date: this.props.localReports[0].reportDate
        }
    }

    componentDidMount() {
        this.props.fetchReports();
    }

    render() {
        return (
            <div className="wh-stats1">
                <div className="s12 wh-stats1-col">
                    <div className="wh-stats1-title">
                        Report Title
                    </div>
                    <div className="wh-stats1-date">
                        Date: 2020-11-03   Author: John Smith
                    </div>
                    <div className="wh-stats1-summary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    localReport: state.reports.data[0]
})

export default connect(mapStateToProps, { fetchReports })(DashStats1);