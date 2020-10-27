import React from 'react';

class Timeline extends React.Component {
    render() {
        return (
            <div className="wh-timeline">
                <div className="wh-timeline-title">
                    <div className="row">
                        <div className="col s6">
                            <div className="wh-timeline-title-title">Timeline</div>
                        </div>
                        <div className="col s6">
                            <div className="btn wh-timeline-title-add">
                                <i className="fas fa-plus-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wh-timeline-reports">
                    <div className="wh-timeline-reports-wgt">
                        <span className="wh-timeline-wgt-date">27-10-2020</span>
                        <span className="wh-timeline-wgt-title">Report Title</span>
                        <span className="wh-timeline-wgt-open btn">
                            <i class="fas fa-external-link-square-alt"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
};

export default Timeline;