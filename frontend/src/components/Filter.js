import React from 'react';

class Filter extends React.Component {

    render() {
        return (
            <div className="wh-filter-bar">
                <div className="row">
                    <div className="wh-filter-widget-title col s4 m1">
                        <p>ID:</p>
                    </div>
                    <div className="wh-filter-widget-input col s8 m2">
                        <div className="wh-filter-input-textbox">
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="wh-filter-widget-title col s4 m1">
                        <p>Status:</p>
                    </div>
                    <div className="wh-filter-widget-input col s8 m2">
                        <div className="wh-filter-input-textbox">
                            <select className="browser-defaul" style={{ display: "block" }}>
                                <option></option>
                                <option value="Storage" className="green">Storage</option>
                                <option value="warning" className="orange">Warning</option>
                                <option value="Over" className="red">Over</option>
                                <option value="Vacant" className="grey">Vacant</option>
                            </select>
                        </div>
                    </div>
                    <div className="wh-filter-widget-title col s5 m2">
                        <p>Location:</p>
                    </div>
                    <div className="wh-filter-widget-input col s7 m3">
                        <div className="wh-filter-input-textbox">
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="wh-filter-widget-title col s12 m1">
                        <button className="btn wh-filter-btn">Filter</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;