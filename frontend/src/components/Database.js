import React from 'react';
import { connect } from 'react-redux';
import { fetchRenting } from '../actions/rentingActions';
import jQuery from 'jquery';

//Components
import Filter from './Filter';
import Table from './Table';
import Data from './NewData';


class Database extends React.Component {

    componentDidMount() {
        this.props.fetchRenting();
    }

    // componentDidUpdate() {
    //     this.props.fetchRenting();
    // }

    newDataRollout = () => {
        jQuery('#databaseUI').hide();
        jQuery('#newDataUI').show();
    }

    render() {
        return (
            <div className="wh-database-container">
                <div id="databaseUI">
                    <div className="section">
                        <div className="wh-database-filter">
                            <h4 className="wh-database-filter-title">Filter</h4>
                            <Filter />
                        </div>
                    </div>
                    <div className="section">
                        <Table data={this.props.localRenting} />
                    </div>
                    <div className="section">
                        <div className="wh-newData">
                            <button className="wh-newData-btn btn" onClick={this.newDataRollout}>New Data</button>
                        </div>
                    </div>
                </div>
                <div id="newDataUI" style={{ display: 'none' }}>
                    <div className="section">
                        <div className="wh-database-newData">
                            <h4 className="wh-database-newData-title">New Data</h4>
                        </div>
                    </div>
                    <div className="section">
                        <Data />
                    </div>
                    <div className="section"></div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    localRenting: state.rentings.data
});

export default connect(mapStateToProps, { fetchRenting })(Database);