import React from 'react';

class Table extends React.Component {
    render() {

        const dataItems = this.props.data.map(item => (
            <tr key={item.orderId} className="wh-table-data">
                <td className="wh-table-data-1">{item.orderId}</td>
                <td className="wh-table-data-2">{item.client}</td>
                <td className="wh-table-data-3">{item.itemQuantity}</td>
                <td>£{item.pricePerWeek}</td>
                <td className="wh-table-data-4">{item.LeaseEnd}</td>
                <td className="wh-table-data-5"><div className="wh-table-status-ok">{item.status}</div></td>
                <td className="wh-table-data-6">{item.location}</td>
                <td className="wh-table-data-7"><div className="wh-table-link-btn"><i className="fas fa-external-link-square-alt"></i></div></td>
            </tr>
        ));

        return (
            <div className="wh-table-section">
                <table className="wh-table">
                    <thead className="wh-table-thead">
                        <tr className="wh-table-headers">
                            <th className="wh-table-header-1">Order ID</th>
                            <th className="wh-table-header-2">Name</th>
                            <th className="wh-table-header-3">Item Amount</th>
                            <th className="wh-table-header-price">Price/WK</th>
                            <th className="wh-table-header-4">Deadline</th>
                            <th className="wh-table-header-5">Status</th>
                            <th className="wh-table-header-6">Location</th>
                            <th className="wh-table-header-7"></th>
                        </tr>
                    </thead>
                    <tbody className="wh-table-body">
                        {dataItems}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
