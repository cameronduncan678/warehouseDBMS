import React from 'react';

class DataItems extends React.Component {
    render() {
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
                            <tr>
                                <td>Storage Item</td>
                                <td>5</td>
                                <td>£ 520</td>
                            </tr>
                            <tr>
                                <td>Item for Rent</td>
                                <td>8</td>
                                <td>£ 1000</td>
                            </tr>
                        </tbody>
                        <tfoot className="wh-dataitem-footer">
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="wh-dataitem-footer-total">£ 1520</td>
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
        );
    }
}

export default DataItems;