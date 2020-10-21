import React from 'react';
import { fetchLocations } from '../actions/locationsActions';
import { connect } from 'react-redux';

class NewData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            leaseDate: '',
            location: '',
            items: [
                { itemName: 'Storage Item 1', amount: 3, pricePerWeek: 600 },
                { itemName: 'Storage Item 2', amount: 6, pricePerWeek: 1200 }
            ],
            priceTotal: 0,
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newData = {
            client: this.state.clientName,
            LeaseEnd: this.state.leaseDate,
            location: this.state.location
        }

        console.log(newData);
    }

    componentDidMount() {
        this.props.fetchLocations();
    }

    generateTotal = () => {
        var total = 0;
        this.state.items.forEach(item => {
            total += item.pricePerWeek;
        })
        return total;
    }

    newItem = (item, quantity, price) => {
        var itemObj = {
            itemName: item,
            amount: quantity,
            pricePerWeek: price
        };
        this.state.items.push(itemObj);
    }

    render() {

        const locationWdgts = this.props.localLocations.map(item => (
            <div key={item.location} className="wh-data-location-item">
                <span>{item.location}</span>
                {/* <button className="btn"></button> */}
                <input className="browser-default" name="location" type="radio" onChange={this.onChange} value={item.location}></input>
            </div>
        ));

        const itemsRows = this.state.items.map(item => (
            <tr key={item.itemName}>
                <td>{item.itemName}</td>
                <td>{item.amount}</td>
                <td>£{item.pricePerWeek}</td>
                <td></td>
            </tr>
        ));

        return (
            <div className="wh-newDatapacket">
                <div className="section">
                    <div className="wh-data-name">
                        <div className="wh-data-wgt">Name</div>
                        <div className="wh-data-input">
                            <input name="clientName" type="text" onChange={this.onChange} value={this.state.clientName}></input>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-deadline">
                        <div className="wh-data-wgt">Lease End</div>
                        <div className="wh-data-input">
                            <input name="leaseDate" type="date" onChange={this.onChange} value={this.state.leaseDate}></input>
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
                        {locationWdgts}
                    </div>
                </div>
                <div className="section wh-NewDataItems-table">
                    <table>
                        <thead>
                            <tr>
                                <th className="wh-dataitem-header-1">Name Here</th>
                                <th className="wh-dataitem-header-2">Amount</th>
                                <th className="wh-dataitem-header-2">Price/WK</th>
                                <th className="wh-dataitem-header-2">Edit</th>
                            </tr>
                        </thead>
                        <tbody className="wh-dataitem-body">
                            {itemsRows}
                        </tbody>
                        <tfoot className="wh-dataitem-footer">
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="wh-dataitem-footer-total">£{this.generateTotal()}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="section">
                    <div className="wh-data-submit">
                        <button className="wh-addItem-btn btn">
                            Add Item
                        </button>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-submit">
                        <button className="wh-data-submit-btn btn" onClick={this.onSubmit}>
                            Commit Data
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    localLocations: state.locations.data
})

export default connect(mapStateToProps, { fetchLocations })(NewData);