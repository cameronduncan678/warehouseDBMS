import React from 'react';

class DashStats2 extends React.Component {
    render() {
        return (
            <div className="wh-stats2 row">
                <div className="col wh-income s12 m6">
                    <div className="wh-income-total">
                        <div>£26,000</div>
                    </div>
                    <div className="wh-income-total-text orange">
                        Income Total /WK
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="wh-loc-income">
                        <div className="wh-loc-income-box">
                            <span className="wh-loc-income-wgt">
                                <i className="fas fa-warehouse"></i>
                                <p>Manchester</p>
                                <p>£10,800</p>
                            </span>
                            <span className="wh-loc-income-wgt">
                                <i className="fas fa-warehouse"></i>
                                <p>Newcastle</p>
                                <p>£2,600</p>
                            </span>
                            <span className="wh-loc-income-wgt">
                                <i className="fas fa-warehouse"></i>
                                <p>Edinburgh</p>
                                <p>£7,000</p>
                            </span>
                            <span className="wh-loc-income-wgt">
                                <i className="fas fa-warehouse"></i>
                                <p>Aberdeen</p>
                                <p>£9,000</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashStats2;