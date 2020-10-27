import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/itemActions'


class Items extends React.Component {

    componentDidMount() {
        this.props.fetchItems(this.props.location.state.itemsId)
    }

    generatePrices(quantity) {
        var slots = Math.floor(quantity / 5);
        var spaces = quantity % 5;

        return (slots * 500) + (spaces * 200);
    }

    generateTotal(array) {
        var Total = 0;
        array.ComponentforEach(item => {
            Total += this.generatePrices(item.itemQuantity);
        });
        return Total;
    }

    render() {

        const itemRow = this.props.localItems.map(item => (
            <tr key={item.itemName}>
                <td>{item.itemName}</td>
                <td>{item.itemQuantity}</td>
                <td>{this.generatePrices(item.itemQuantity)}</td>
            </tr>
        ))

        return (
            <main className="wh-Items section">
                <section className="section">
                    <div className="row">
                        <div className="col s12 l6">
                            <div className="wh-dataItems">
                                <div className="wh-dataItems-header">
                                    <span>Items</span>
                                </div>
                                <div className="section wh-dataItems-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="wh-dataitem-header-1">Name Here</th>
                                                <th className="wh-dataitem-header-2">Amount</th>
                                                <th className="wh-dataitem-header-2">Price/WK</th>
                                            </tr>
                                        </thead>
                                        <tbody className="wh-dataitem-body">
                                            {itemRow}
                                        </tbody>
                                        <tfoot className="wh-dataitem-footer">
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td className="wh-dataitem-footer-total">£0</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="section ">
                                    <div className="wh-dataitems-addnew">
                                        <div className="btn wh-dataitems-btn">New Item</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 l6">
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
                                            <input className="browser-default" name="location" type="radio"></input>
                                        </div>
                                        <div className="wh-data-location-item">
                                            <span>New Castle</span>
                                            <input className="browser-default" name="location" type="radio"></input>
                                        </div>
                                        <div className="wh-data-location-item">
                                            <span>Edinburgh</span>
                                            <input className="browser-default" name="location" type="radio"></input>
                                        </div>
                                        <div className="wh-data-location-item">
                                            <span>Aberdeen</span>
                                            <input className="browser-default" name="location" type="radio"></input>
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
                                                <option value="none">none</option>
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
                        </div>
                    </div>
                </section>
            </main>
        )
    }
};

const mapStateToProps = state => ({
    localItems: state.items.data
})

export default connect(mapStateToProps, { fetchItems })(Items);