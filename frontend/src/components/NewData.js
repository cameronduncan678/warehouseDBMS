import React from 'react';
import { fetchLocations } from '../actions/locationsActions';
import { addRenting } from '../actions/rentingActions';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import jQuery from 'jquery';

class NewData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            leaseDate: '',
            location: '',
            items: [],
            priceTotal: 0,
            showModal: false,
            itemObj_name: '',
            itemObj_amount: 0,
            itemObj_ppw: 0
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    // Reset to default state
    resetState = () => {
        this.setState({
            clientName: '',
            leaseDate: '',
            location: '',
            items: [],
            priceTotal: 0,
            showModal: false,
            itemObj_name: '',
            itemObj_amount: 0,
            itemObj_ppw: 0
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    // Send the new Data to the Database
    onSubmit(e) {
        e.preventDefault();

        var amountTotal = () => {
            var total = 0;
            this.state.items.forEach(item => {
                total += item.amount;
            });
            return total;
        }

        const newData = {
            client: this.state.clientName,
            LeaseEnd: this.state.leaseDate,
            location: this.state.location,
            items: this.state.items,
            itemQuantity: this.state.items.length,
            slots: Math.floor(amountTotal() / 5),
            spaces: amountTotal() % 5,
            pricePerWeek: this.generateTotal(),
            status: 'storage'
        }

        this.props.addRenting(newData);
        this.newDataBack()
    }

    componentDidMount() {
        this.props.fetchLocations();
    }

    // Generate the total price for all items in Order
    generateTotal = () => {
        var total = 0;
        this.state.items.forEach(item => {
            total += item.pricePerWeek;
        })
        return total;
    }

    // Open the add item modal
    openModal = () => {
        this.setState({ showModal: true });
    }

    // Close the add item modal
    closeModal = () => {
        this.setState({ showModal: false });
    }

    // Push an item to the items array in new data rollout
    pushItem = () => {
        var convert = parseInt(this.state.itemObj_amount);
        var priceGen = () => {
            var slots = (convert / 5) * 500;
            var spaces = (convert % 5) * 200;

            if (slots) {
                return slots + spaces;
            }
            return spaces;
        }
        var itemObj = {
            itemName: this.state.itemObj_name,
            amount: convert,
            pricePerWeek: priceGen()
        }
        this.state.items.push(itemObj);

        this.setState({
            showModal: false,
            itemObj_name: '',
            itemObj_amount: 0,
            itemObj_ppw: 0
        });
    }

    // Return to database view
    newDataBack = () => {
        jQuery('#newDataUI').hide();
        jQuery('#databaseUI').show();
        this.resetState();
    }

    // Delete an item from New Data rollout
    deleteItem = (index) => {
        var itemArr = [];
        for (var i = 0; i < this.state.items.length; i++) {
            if (i === index) {
                continue;
            }
            itemArr.push(this.state.items[i])
        }
        this.setState({ items: itemArr });
    }

    //  Component JSX start here
    render() {

        const locationWdgts = this.props.localLocations.map((item) => (
            <div key={item.location} className="wh-data-location-item">
                <span>{item.location}</span>
                <input className="browser-default" name="location" type="radio" onChange={this.onChange} value={item.location}></input>
            </div>
        ));

        const itemsRows = this.state.items.map((item, index) => (
            <tr key={index}>
                <td>{item.itemName}</td>
                <td>{item.amount}</td>
                <td>£{item.pricePerWeek}</td>
                <td>
                    <div className="btn wh-dataitem-body-del" onClick={() => this.deleteItem(index)}><i className="fas fa-trash-alt"></i></div>
                </td>
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
                                <th className="wh-dataitem-header-2"></th>
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
                        <button className="wh-addItem-btn btn" onClick={this.openModal}>
                            Add Item
                        </button>
                    </div>
                </div>
                <Modal className="wh-AddData-modal" isOpen={this.state.showModal} overlayClassName="wh-modal-Overlay">
                    <div className="wh-addData-modalEls">
                        <div className="section">
                            <div className="wh-addData-input">
                                <div className="wh-addData-input-title">Item Name:</div>
                                <div className="wh-addData-input-feild" >
                                    <input type="text" name="itemObj_name" onChange={this.onChange}></input>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="wh-addData-input">
                                <div className="wh-addData-input-title">Quantity:</div>
                                <div className="wh-addData-input-feild" >
                                    <input type="text" name="itemObj_amount" onChange={this.onChange}></input>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="wh-addData-input">
                                <button className="wh-addData-commit-btn btn" onClick={this.pushItem}>Commit Item</button>
                                <button className="wh-addData-cancel-btn btn" onClick={this.closeModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>
                <div className="section">
                    <div className="wh-data-submit">
                        <button className="wh-data-submit-btn btn" onClick={this.onSubmit}>
                            Commit Data
                        </button>
                    </div>
                </div>
                <div className="section">
                    <div className="wh-data-submit">
                        <button className="wh-newData-cancel btn" onClick={this.newDataBack}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    localLocations: state.locations.data
})

export default connect(mapStateToProps, { fetchLocations, addRenting })(NewData);