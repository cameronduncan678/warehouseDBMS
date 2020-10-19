import React from 'react';

class Data extends React.Component {
    render() {
        return (
            <div className="wh-datapacket">
                <div className="section">
                    <div className="wh-data-name">
                        <div className="wh-data-wgt">Name</div>
                        <div className="wh-data-input">
                            <input type="text"></input>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-deadline">
                        <div className="wh-data-wgt">Deadline</div>
                        <div className="wh-data-input">
                            <input type="date"></input>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-location">
                        <div className="wh-data-location-wgt">Location</div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-location-selection">
                        <div className="wh-data-location-item">
                            <span>Manchester</span>
                            <button className="btn"></button>
                        </div>
                        <div className="wh-data-location-item">
                            <span>New Castle</span>
                            <button className="btn"></button>
                        </div>
                        <div className="wh-data-location-item">
                            <span>Edinburgh</span>
                            <button className="btn"></button>
                        </div>
                        <div className="wh-data-location-item">
                            <span>Aberdeen</span>
                            <button className="btn"></button>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-status">
                        <div className="wh-data-wgt">Status</div>
                        <div className="wh-data-input">
                            <select className="browser-defaul" style={{ display: "block" }}>
                                <option value="Storage" className="green">Storage</option>
                                <option value="warning" className="orange">Warning</option>
                                <option value="Over" className="red">Over</option>
                                <option value="Vacant" className="grey">Vacant</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-submit">
                        <button className="wh-data-submit-btn btn">
                            Edit Data
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data;