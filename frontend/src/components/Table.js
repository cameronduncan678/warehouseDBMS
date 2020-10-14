import React from 'react';

class Table extends React.Component {
    render() {
        return (
            <div className="wh-table-section">
                <table className="wh-table">
                    <thead className="wh-table-thead">
                        <tr className="wh-table-headers">
                            <th className="wh-table-header-1">Order ID</th>
                            <th className="wh-table-header-2">Name</th>
                            <th className="wh-table-header-3">Item Amount</th>
                            <th className="wh-table-header-price">Price/day</th>
                            <th className="wh-table-header-4">Deadline</th>
                            <th className="wh-table-header-5">Status</th>
                            <th className="wh-table-header-6">Location</th>
                            <th className="wh-table-header-7"></th>
                        </tr>
                    </thead>
                    <tbody className="wh-table-body">
                        <tr className="wh-table-data">
                            <td className="wh-table-data-1">223hobo5b2pco</td>
                            <td className="wh-table-data-2">Jackob Soldin</td>
                            <td className="wh-table-data-3">#13</td>
                            <td>£ 2600</td>
                            <td className="wh-table-data-4">12/10/2020</td>
                            <td className="wh-table-data-5"><div className="wh-table-status-ok">STORAGE</div></td>
                            <td className="wh-table-data-6">Manchester</td>
                            <td className="wh-table-data-7"><div className="wh-table-link-btn"><i className="fas fa-external-link-square-alt"></i></div></td>
                        </tr>
                        <tr className="wh-table-data">
                            <td>28bvao85ff</td>
                            <td>Jane Lancaster</td>
                            <td>#29</td>
                            <td>£ 4700</td>
                            <td>12/10/2020</td>
                            <td><div className="wh-table-status-warning">WARNING</div></td>
                            <td>Derby</td>
                            <td><div className="wh-table-link-btn"><i className="fas fa-external-link-square-alt"></i></div></td>
                        </tr>
                        <tr className="wh-table-data">
                            <td>09vboav23biv</td>
                            <td>Allister McBrindle</td>
                            <td>#07</td>
                            <td>£ 700</td>
                            <td>12/10/2020</td>
                            <td><div className="wh-table-status-over">OVER</div></td>
                            <td>Derby</td>
                            <td><div className="wh-table-link-btn"><i className="fas fa-external-link-square-alt"></i></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
