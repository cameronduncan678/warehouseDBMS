import React from 'react';


class DashStats1 extends React.Component {

    render() {

        return (
            <div className="wh-stats1 row">
                <div className="s12 wh-stats1-col">
                    <div className="wh-stats1-title">
                        {this.props.report.reportTitle}
                    </div>
                    <div className="wh-stats1-date">
                        Date: {this.props.report.reportDate}   Author: {this.props.report.reportAuthor}
                    </div>
                    <div className="wh-stats1-summary">
                        {this.props.report.reportText}
                    </div>
                </div>
            </div>
        );
    }
}

export default DashStats1;