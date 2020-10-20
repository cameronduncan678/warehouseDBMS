import React from 'react';



class DashStats2 extends React.Component {

    generateTotal = () => {
        var total = 0;
        this.props.locations.forEach(item => {
            total += item.incomePerWeek;
        });
        return total;
    }

    render() {

        const locationWdgts = this.props.locations.map(item => (
            <span key={item.location} className="wh-loc-income-wgt">
                <i className="fas fa-warehouse"></i>
                <p>{item.location}</p>
                <p>£{item.incomePerWeek}</p>
            </span>
        ));

        return (
            <div className="wh-stats2 row">
                <div className="col wh-income s12 m6">
                    <div className="wh-income-total">
                        <div>£{this.generateTotal()}</div>
                    </div>
                    <div className="wh-income-total-text orange">
                        Income Total /WK
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="wh-loc-income">
                        <div className="wh-loc-income-box">
                            {locationWdgts}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashStats2;