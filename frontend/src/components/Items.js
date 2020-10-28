import React from 'react';
import Modal from 'react-modal';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            showModal: false
        })
    }

    generatePrices(quantity) {
        var slots = Math.floor(quantity / 5);
        var spaces = quantity % 5;

        return (slots * 500) + (spaces * 200);
    }

    generateTotal() {
        var Total = 0;
        this.props.items.map(item => {
            Total += this.generatePrices(item.itemQuantity);
        });
        return Total;
    }

    // Open the add item modal
    openModal = () => {
        this.setState({ showModal: true });
    }

    // Close the add item modal
    closeModal = () => {
        this.setState({ showModal: false });
    }

    render() {

        const itemRow = this.props.items.map(item => (
            <tr key={item.itemName}>
                <td>{item.itemName}</td>
                <td>{item.itemQuantity}</td>
                <td>{this.generatePrices(item.itemQuantity)}</td>
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
                                    <input type="text" name="itemObj_name"></input>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="wh-addData-input">
                                <div className="wh-addData-input-title">Quantity:</div>
                                <div className="wh-addData-input-feild" >
                                    <input type="text" name="itemObj_amount"></input>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="wh-addData-input">
                                <button className="wh-addData-commit-btn btn">Commit Item</button>
                                <button className="wh-addData-cancel-btn btn" onClick={this.closeModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

}

export default Items;