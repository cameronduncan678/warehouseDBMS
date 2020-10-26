import React from 'react';
import { filterRenting } from '../actions/rentingActions';
import { connect } from 'react-redux';
import jQuery from 'jquery';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: '',
            status: '',
            location: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.filterRenting(this.state);
    }

    render() {

        const resetFilters = () => {
            jQuery('filterOrderId').val('');
            jQuery('filterStatus').val('');
            jQuery('filterLocation').val('');

            this.setState({
                orderId: '',
                status: '',
                location: ''
            });
        }

        return (
            <div className="wh-filter-bar">
                <div className="row">
                    <div className="wh-filter-widget-title col s4 m1">
                        <p>ID:</p>
                    </div>
                    <div className="wh-filter-widget-input col s8 m2">
                        <div className="wh-filter-input-textbox">
                            <input id="filterOrderId" name="orderId" type="text" onChange={this.onChange} value={this.state.orderId}></input>
                        </div>
                    </div>
                    <div className="wh-filter-widget-title col s4 m1">
                        <p>Status:</p>
                    </div>
                    <div className="wh-filter-widget-input col s8 m2">
                        <div className="wh-filter-input-textbox">
                            <select id="filterStatus" className="browser-defaul" name="status" onChange={this.onChange} value={this.state.location} style={{ display: "block" }}>
                                <option>{this.state.status}</option>
                                <option value="storage" className="green">Storage</option>
                                <option value="warning" className="orange">Warning</option>
                                <option value="over" className="red">Over</option>
                                <option value="vacant" className="grey">Vacant</option>
                                <option value="none">none</option>
                            </select>
                        </div>
                    </div>
                    <div className="wh-filter-widget-title col s5 m2">
                        <p>Location:</p>
                    </div>
                    <div className="wh-filter-widget-input col s7 m2">
                        <div className="wh-filter-input-textbox">
                            <input id="filterLocation" name="location" type="text" onChange={this.onChange} value={this.state.location}></input>
                        </div>
                    </div>
                    <div className="wh-filter-widget-title col s12 m1">
                        <button className="btn wh-filter-btn" onClick={this.onSubmit}>Filter</button>
                    </div>
                    <div className="wh-filter-widget-title col s12 m1">
                        <button className="btn wh-filter-btn" onClick={resetFilters}><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { filterRenting })(Filter);