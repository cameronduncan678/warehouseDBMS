import React from 'react';
import { Link } from 'react-router-dom';

class Table extends React.Component {
    render() {

        const statusElement = (status) => {
            switch (status) {
                case "storage":
                    return "wh-table-status-ok";
                case "warning":
                    return "wh-table-status-warning";
                case "over":
                    return "wh-table-status-over";
                case "vacant":
                    return "wh-table-status-out";
                default:
                    return "wh-table-status-out"
            }
        }

        const fetchItems = (id) => {
            console.log(id);
        }

        const dataItems = this.props.data.map(item => (
            <tr key={item.orderId} className="wh-table-data">
                <td className="wh-table-data-1">{item.orderId}</td>
                <td className="wh-table-data-2">{item.client}</td>
                <td className="wh-table-data-3">{item.itemQuantity}</td>
                <td>£{item.pricePerWeek}</td>
                <td className="wh-table-data-4">{item.LeaseEnd}</td>
                <td className="wh-table-data-5"><div className={statusElement(item.status)}>{item.status}</div></td>
                <td className="wh-table-data-6">{item.location}</td>
                <td className="wh-table-data-7">
                    <Link to="/items" onClick={() => fetchItems(item.itemsId)}>
                        <div className="wh-table-link-btn">
                            <i className="fas fa-external-link-square-alt"></i>
                        </div>
                    </Link>
                </td>
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
