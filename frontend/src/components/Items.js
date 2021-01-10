import React from 'react';
import Modal from 'react-modal';
import { fetchRentingById } from '../actions/rentingActions';
import { addItem, deleteItems } from '../actions/itemActions';
import { connect } from 'react-redux';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            showModal: false,
            itemObj_name: '',
            itemObj_amount: 0,
        })

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    generatePrices(quantity) {
        var slots = Math.floor(quantity / 5);
        var spaces = quantity % 5;

        return (slots * 500) + (spaces * 200);
    }

    generateTotal() {
        var Total = 0;
        this.props.items.forEach(item => {
            Total += this.generatePrices(item.itemQuantity);
        });
        return Total;
    }

    // Open the add item modal
    openModal = () => {
        this.setState({ showModal: true });
    }

    commitItem = () => {
        if (this.props.items[0]) {
            let loc = this.props.items[0].location;
            let id = this.props.items[0].itemsId;
            if (this.itemObj_name !== '' && this.itemObj_amount !== '') {
                let itemObj = {
                    itemName: this.state.itemObj_name,
                    itemQuantity: parseInt(this.state.itemObj_amount),
                    location: loc,
                    itemsId: id
                }
                //console.log(itemObj);
                this.props.addItem(itemObj);
            }
        }

        this.setState({ showModal: false });
    }

    // Close the add item modal
    closeModal = () => {
        this.setState({ showModal: false });
    }

    deleteItemRow = (itemId, itemName) => {
        this.props.deleteItems(itemId, itemName);
        this.props.fetchRentingById(this.props.rentingId);
    }

    render() {

        const itemRow = this.props.items.map(item => (
            <tr key={item.itemName}>
                <td>{item.itemName}</td>
                <td>{item.itemQuantity}</td>
                <td>{this.generatePrices(item.itemQuantity)}</td>
                <td>
                    <span className="wh-dataItems-item-delete" onClick={() => this.deleteItemRow(item.id)}>
                        <i className="fas fa-file-times"></i>
                    </span>
                </td>
            </tr>
        ))

        return (
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
                                <th className="wh-dataitem-header-2"></th>
                            </tr>
                        </thead>
                        <tbody className="wh-dataitem-body">
                            {itemRow}
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
                <div className="section ">
                    <div className="wh-dataitems-addnew" onClick={this.openModal}>
                        <div className="btn wh-dataitems-btn">New Item</div>
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
                                <button className="wh-addData-commit-btn btn" onClick={this.commitItem}>Commit Item</button>
                                <button className="wh-addData-cancel-btn btn" onClick={this.closeModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default connect(null, { addItem, deleteItems, fetchRentingById })(Items);